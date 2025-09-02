import { Heart, Quote } from 'lucide-react';

export const LoveStory = () => {
  return (
    <section id="love-story" className="py-20 bg-gradient-soft">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Heart className="w-8 h-8 text-romantic fill-romantic animate-heart-beat" />
            <h2 className="text-4xl md:text-5xl font-bold text-primary font-script">
              My Love
            </h2>
            <Heart className="w-8 h-8 text-romantic fill-romantic animate-heart-beat" />
          </div>
          <p className="text-muted-foreground text-lg">
            A heartfelt message from your loving wife
          </p>
        </div>

        <div className="relative">
          {/* Quote Icon */}
          <div className="absolute -top-4 -left-4 text-romantic/20">
            <Quote className="w-16 h-16" />
          </div>

          {/* Love Letter */}
          <div className="bg-white rounded-3xl shadow-elegant p-8 md:p-12 relative">
            <div className="prose prose-lg max-w-none">
              <p className="text-primary/90 leading-relaxed mb-6 text-lg">
                Happy first wedding anniversary to us ❤️
              </p>
              
              <p className="text-primary/90 leading-relaxed mb-6">
                One year. Twelve months. Fifty-two weeks. Three hundred and sixty-five days. Eight thousand, seven hundred and sixty hours. Five hundred and twenty-five thousand, six hundred minutes. And over thirty-one million, five hundred and thirty-six thousand seconds of loving you, being loved by you, and walking side by side with you, and countless unforgettable moments with you. Every single moment has been the happiest I have ever been.
              </p>

              <p className="text-primary/90 leading-relaxed mb-6">
                This past year, I have come to see, more than ever, the silent sacrifices, the quiet leadership, the steady shoulders that carry weight without complaint, the faith and resilience you uphold even when storms rage. My heart is so full of gratitude that I get to see, honour, and celebrate these things in you.
              </p>

              <p className="text-primary/90 leading-relaxed mb-6">
                From you, I have learned so much. Chief of which is how to truly love, how to forgive, how to give even when it costs, how to sacrifice with joy, how to be diligent, disciplined, and anchored in faith. You live these values daily, not in words alone, but in actions that speak louder than any sermon.
              </p>

              <p className="text-primary/90 leading-relaxed mb-6">
                I deeply respect how resolute you are, how unshakable your faith has remained, even in the moments when mine felt weak. You stood firm, unwavering, and in doing so, you lifted me up and kept us both grounded in God. That strength is a gift I will never take for granted.
              </p>

              <p className="text-primary/90 leading-relaxed mb-6">
                You are not just my husband. You are a man in every sense of the word, a leader, a groomer, a friend, a father, and a lover, embodying each role with your whole heart. You don't just define those words; you live them out daily with grace, strength, and love. Your sense of responsibility is second to none, it never ceases to amaze me. And oh, how you protect me… not just with your presence, but with your prayers, your wisdom, your covering, and your love. With you, I feel safe, shielded, and cherished in ways words can hardly capture.
              </p>

              <p className="text-primary/90 leading-relaxed mb-6">
                As we step into this new season, I look forward with joy and expectation. A time of restoration, refreshing, ease, and fruitfulness lies ahead. I can already see the unravelling of greater things, the unfolding of higher heights, and I wait in awe at how far God is taking you. I am excited to witness the "becoming" that lies ahead, and I count it my honour to stand by your side as your wife through it all.
              </p>

              <p className="text-primary/90 leading-relaxed mb-6">
                Always remember that I am rooting for you. I am supporting you. I am your number one fan, your biggest cheerleader, and your forever companion.
              </p>

              <p className="text-primary/90 leading-relaxed mb-8">
                I love you so deeply, with a love that grows fuller each passing day. One year down, forever to go, my love ❤️
              </p>

              <div className="text-right">
                <p className="text-romantic font-script text-2xl mb-2">
                  Yours, always and forever,
                </p>
                <p className="text-primary font-semibold text-xl">
                  Your Presh
                </p>
              </div>
            </div>

            {/* Decorative Hearts */}
            <div className="absolute top-4 right-4">
              <Heart className="w-6 h-6 text-romantic/30 fill-romantic/30" />
            </div>
            <div className="absolute bottom-4 left-4">
              <Heart className="w-4 h-4 text-romantic/20 fill-romantic/20" />
            </div>
          </div>

          {/* Quote Icon - Bottom */}
          <div className="absolute -bottom-4 -right-4 text-romantic/20 transform rotate-180">
            <Quote className="w-16 h-16" />
          </div>
        </div>

        {/* Beautiful Quote */}
        <div className="mt-16 text-center">
          <blockquote className="text-2xl md:text-3xl font-script text-primary italic">
            "Being deeply loved by someone gives you strength, while loving someone deeply gives you courage."
          </blockquote>
          <cite className="block mt-4 text-muted-foreground text-lg">— Lao Tzu</cite>
        </div>
      </div>
    </section>
  );
};