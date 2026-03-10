import { ScrambleText } from '@/components/ScrambleText';
import { HoverScrambleText } from '@/components/HoverScrambleText';
import { useState } from 'react';

const lists = {
  films: [
    'Edge of Tomorrow',
    'Interstellar',
    'Gone Girl',
    'John Wick',
    'Good Will Hunting',
    'Iron Man',
    'Inception',
  ],
  books: [
    'Crime and Punishment (Fyodor Dostoevsky)',
    'The Paper Menagerie and Other Stories (Ken Liu)',
    'The Picture of Dorian Gray (Oscar Wilde)',
    'The Percy Jackson series (Rick Riordan)',
    'La Familia de Pascual Duarte (Camilo José Cela)',
    'Don Quijote (Miguel de Cervantes)',
    'The Three-Body Problem (Cixin Liu)',
    'Anna Karenina (Leo Tolstoy)',
    'A Doll\'s House (Henrik Ibsen)',
  ],
  placesAround: [
    'Robarts Library study sessions',
    'Late nights at Sidney Smith Hall',
    'Caffeine runs at the Caf in Bahen',
    'Grabbing bubble tea at Chatime, near campus',
    'Chilling in King\'s College Circle',
    'Lunch at Sammy\'s Student Exchange',
    'People-watching in Convocation Hall',
    'Hiding from responsibility at Gerstein Library',
  ],
  placesInToronto: [
    'Stackt Market',
    'Kensington Market exploration',
    'Trinity Bellwoods Park picnics',
    'Evenings at TIFF Bell Lightbox',
    'Sunday brunch at Mildred\'s Temple Kitchen',
    'Books and browsing at Type Books (Queen West)',
    'Swims at Toronto Pan Am Sports Centre',
    'Wandering St. Lawrence Market',
    'Walking by Harbourfront Centre',
  ],
};

const sections = [
  { key: 'films', label: 'FILMS', items: lists.films },
  { key: 'books', label: 'BOOKS', items: lists.books },
  { key: 'uoft', label: 'PLACES AT/AROUND UOFT', items: lists.placesAround },
  { key: 'toronto', label: 'PLACES IN TORONTO', items: lists.placesInToronto },
];

const Writing = () => {
  const [hoveredSection, setHoveredSection] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-background text-white font-mono p-8 md:p-16">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-xs uppercase tracking-wider mb-12 font-bold text-center">
          <span style={{ color: 'var(--accent-mint)' }}>
            <ScrambleText text="FAVORITES I'VE COLLECTED THROUGH 19 YEARS OF LIVING" delay={100} />
          </span>
        </h1>

        <div className="space-y-10">
          {sections.map((section, sIdx) => (
            <section
              key={section.key}
              onMouseEnter={() => setHoveredSection(section.key)}
              onMouseLeave={() => setHoveredSection(null)}
            >
              <h2 className="text-xs uppercase tracking-wider mb-4 font-bold">
                <span style={{ color: 'var(--accent-mint)' }}>
                  <ScrambleText text={section.label} delay={150 + sIdx * 50} />
                </span>
              </h2>

              <div className="space-y-2 text-xs text-white leading-relaxed">
                {section.items.map((item, idx) => (
                  <div key={idx} className="flex items-baseline gap-3">
                    <span className="text-white/50">
                      <ScrambleText text={String(idx + 1).padStart(2, '0')} delay={200 + sIdx * 50 + idx * 30} />
                    </span>
                    <span>
                      <HoverScrambleText text={item} shouldScramble={hoveredSection === section.key} />
                    </span>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Writing;
