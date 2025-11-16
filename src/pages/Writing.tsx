import { ScrambleText } from '@/components/ScrambleText';
import { Link } from 'react-router-dom';

const lists = {
  films: [
    'edge of tomorrow',
    'interstellar',
    'gone girl',
    'john wick',
    'good will hunting',
    'iron man',
    'inception',
  ],
  books: [
    'crime and punishment (fyodor dostoevsky)',
    'the paper menagerie and other stories (ken liu)',
    'the picture of dorian gray (oscar wilde)',
    'the percy jackson series (rick riordan)',
    'la familia de pascual duarte (camilo josé cela)',
    'don quijote (miguel de cervantes)',
    'the three-body problem (cixin liu)',
    'anna karenina (leo tolstoy)',
    'a doll\'s house (henrik ibsen)',
  ],
  placesAround: [
    'robarts library study sessions',
    'late nights at sidney smith hall',
    'caffeine runs at the caf in bahen',
    'grabbing bubble tea at chatime, near campus',
    'chilling in king\'s college circle',
    'lunch at sammy\'s student exchange',
    'people-watching in convocation hall',
    'hiding from responsibility at gerstein library',
  ],
  placesInNyc: [
    'stackt market',
    'kensington market exploration',
    'trinity bellwoods park picnics',
    'evenings at tiff bell lightbox',
    'sunday brunch at mildred\'s temple kitchen',
    'books and browsing at type books (queen west)',
    'swims at toronto pan am sports centre',
    'wandering st. lawrence market',
    'walking by harbourfront centre',
  ],
};

const Writing = () => {
  return (
    <div className="min-h-screen bg-background text-white font-mono p-8 pt-32 md:p-16 md:pt-24">
      <div className="max-w-4xl space-y-12">
        <Link 
          to="/contact" 
          className="text-xs text-white/70 hover:text-white transition-colors inline-block mb-8 lowercase"
        >
          [ ← back to say hi! ]
        </Link>
        
        <h1 className="text-xs uppercase tracking-wider mb-12 font-bold">
          <span style={{ color: '#7FFFD4' }}>
            <ScrambleText text="FAVORITES I'VE COLLECTED THROUGH 19 YEARS OF LIVING" delay={100} />
          </span>
        </h1>
        
        {/* Films */}
        <section>
          <h2 className="text-xs text-white/50 italic mb-4 lowercase">
            <ScrambleText text="films" delay={200} />
          </h2>
          <ul className="text-xs text-white leading-relaxed space-y-1">
            {lists.films.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </section>

        {/* Books */}
        <section>
          <h2 className="text-xs text-white/50 italic mb-4 lowercase">
            <ScrambleText text="books" delay={300} />
          </h2>
          <ul className="text-xs text-white leading-relaxed space-y-1">
            {lists.books.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </section>

        {/* Places at/around UofT */}
        <section>
          <h2 className="text-xs text-white/50 italic mb-4 lowercase">
            <ScrambleText text="places at/around uoft" delay={500} />
          </h2>
          <ul className="text-xs text-white leading-relaxed space-y-1">
            {lists.placesAround.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </section>

        {/* Places in Toronto */}
        <section>
          <h2 className="text-xs text-white/50 italic mb-4 lowercase">
            <ScrambleText text="places in toronto" delay={600} />
          </h2>
          <ul className="text-xs text-white leading-relaxed space-y-1">
            {lists.placesInNyc.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
};

export default Writing;
