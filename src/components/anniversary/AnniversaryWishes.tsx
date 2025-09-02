import { useState } from 'react';
import { Heart, MessageCircle, Send, Trash2, User } from 'lucide-react';
import { EnhancedButton } from '@/components/ui/enhanced-button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { createClient } from '@supabase/supabase-js';

interface Wish {
  id: string;
  name: string;
  message: string;
  created_at: string;
}

// Initialize Supabase client
const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_ANON_KEY
);

// Supabase functions
const fetchWishesSupabase = async (): Promise<Wish[]> => {
  const { data, error } = await supabase
    .from('wishes')
    .select('*')
    .order('created_at', { ascending: false });
  if (error) throw new Error(error.message);
  return data || [];
};

const createWishSupabase = async (wish: { name: string; message: string }): Promise<Wish> => {
  const { data, error } = await supabase
    .from('wishes')
    .insert([{ name: wish.name, message: wish.message }])
    .select()
    .single();
  if (error) throw new Error(error.message);
  return data;
};

const deleteWishSupabase = async (id: string): Promise<void> => {
  const { error } = await supabase
    .from('wishes')
    .delete()
    .eq('id', id);
  if (error) throw new Error(error.message);
};

export const AnniversaryWishes = () => {
  const [newWish, setNewWish] = useState({ name: '', message: '' });
  const { toast } = useToast();
  const queryClient = useQueryClient();

  // Fetch wishes
  const { data: wishes = [], isLoading, error } = useQuery({
    queryKey: ['wishes'],
    queryFn: fetchWishesSupabase,
  });

  // Create wish mutation
  const createMutation = useMutation({
    mutationFn: createWishSupabase,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['wishes'] });
      setNewWish({ name: '', message: '' });
      toast({
        title: 'Wish sent! ❤️',
        description: 'Thank you for your beautiful message!',
      });
    },
    onError: (error) => {
      console.error('Error creating wish:', error);
      toast({
        title: 'Oops! Something went wrong',
        description: 'Please try again later.',
        variant: 'destructive',
      });
    },
  });

  // Delete wish mutation
  const deleteMutation = useMutation({
    mutationFn: deleteWishSupabase,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['wishes'] });
      toast({
        title: 'Wish deleted',
        description: 'The message has been removed.',
      });
    },
    onError: (error) => {
      console.error('Error deleting wish:', error);
      toast({
        title: 'Error deleting wish',
        description: 'Please try again later.',
        variant: 'destructive',
      });
    },
  });

  const handleSubmitWish = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!newWish.name.trim() || !newWish.message.trim()) {
      toast({
        title: 'Please fill in all fields',
        description: 'Both name and message are required.',
        variant: 'destructive',
      });
      return;
    }

    createMutation.mutate({ name: newWish.name.trim(), message: newWish.message.trim() });
  };

  const handleDeleteWish = (wishId: string) => {
    deleteMutation.mutate(wishId);
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  return (
    <section id="wishes" className="py-20 bg-gradient-soft">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <MessageCircle className="w-8 h-8 text-primary" />
            <h2 className="text-4xl md:text-5xl font-bold text-primary font-script">
              Anniversary Wishes
            </h2>
            <Heart className="w-8 h-8 text-romantic fill-romantic animate-heart-beat" />
          </div>
          <p className="text-muted-foreground text-lg">
            Share your love and best wishes for Joseph & Ayobami
          </p>
        </div>

        {/* Wish Form */}
        <Card className="mb-12 shadow-soft border-0">
          <CardHeader>
            <h3 className="text-2xl font-semibold text-primary font-script text-center">
              Leave Your Anniversary Wishes
            </h3>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmitWish} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-primary mb-2">
                  Your Name
                </label>
                <Input
                  id="name"
                  type="text"
                  value={newWish.name}
                  onChange={(e) => setNewWish(prev => ({ ...prev, name: e.target.value }))}
                  placeholder="Enter your name"
                  className="bg-white border-2 border-accent focus:border-primary transition-romantic"
                  disabled={createMutation.isPending}
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-primary mb-2">
                  Your Message
                </label>
                <Textarea
                  id="message"
                  value={newWish.message}
                  onChange={(e) => setNewWish(prev => ({ ...prev, message: e.target.value }))}
                  placeholder="Write your heartfelt anniversary wishes..."
                  rows={4}
                  className="bg-white border-2 border-accent focus:border-primary transition-romantic resize-none"
                  disabled={createMutation.isPending}
                />
              </div>

              <EnhancedButton
                type="submit"
                variant="romantic"
                size="lg"
                className="w-full"
                loading={createMutation.isPending}
              >
                <Send className="w-5 h-5" />
                Send Your Wishes
              </EnhancedButton>
            </form>
          </CardContent>
        </Card>

        {/* Wishes Display */}
        <div className="space-y-6">
          <h3 className="text-2xl font-semibold text-primary font-script text-center mb-8">
            Messages of Love ({wishes.length})
          </h3>

          {isLoading ? (
            <div className="text-center py-12">
              <p className="text-muted-foreground text-lg">Loading wishes...</p>
            </div>
          ) : error ? (
            <div className="text-center py-12">
              <p className="text-destructive text-lg">Failed to load wishes. Please check your Supabase configuration.</p>
            </div>
          ) : wishes.length === 0 ? (
            <div className="text-center py-12">
              <MessageCircle className="w-16 h-16 text-muted-foreground/50 mx-auto mb-4" />
              <p className="text-muted-foreground text-lg">
                No wishes yet. Be the first to share your love!
              </p>
            </div>
          ) : (
            <div className="grid gap-6">
              {wishes.map((wish, index) => (
                <Card
                  key={wish.id}
                  className={`shadow-soft border-0 transition-romantic hover:shadow-romantic transform hover:-translate-y-1 ${index % 2 === 0 ? 'animate-slide-in-left' : 'animate-slide-in-right'
                    }`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-gradient-romantic rounded-full flex items-center justify-center">
                          <User className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-primary">{wish.name}</h4>
                          <p className="text-sm text-muted-foreground">{formatDate(wish.created_at)}</p>
                        </div>
                      </div>

                      <EnhancedButton
                        variant="ghost"
                        size="sm"
                        onClick={() => handleDeleteWish(wish.id)}
                        className="text-muted-foreground hover:text-destructive"
                        disabled={deleteMutation.isPending}
                      >
                        <Trash2 className="w-4 h-4" />
                      </EnhancedButton>
                    </div>

                    <blockquote className="text-primary/90 leading-relaxed pl-4 border-l-4 border-romantic/30 italic">
                      "{wish.message}"
                    </blockquote>

                    <div className="flex items-center justify-end mt-4 gap-2">
                      <Heart className="w-4 h-4 text-romantic/60" />
                      <span className="text-sm text-muted-foreground">With love</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};