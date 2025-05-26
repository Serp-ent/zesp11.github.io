import Link from 'next/link';

const directory = '/reports';
const semesterDirectory = `${directory}/semester`;
const semesterMainReport = {
  label: "Raport Kierownika",
  path: `${semesterDirectory}/main.pdf`,
};

const semesterIndividualDir = `${semesterDirectory}/individual`
const semesterIndividualReports = [
  {
    label: "Cezary Arszyński",
    path: `${semesterIndividualDir}/ca.pdf`
  },
  {
    label: "Franciszek Szary",
    path: `${semesterIndividualDir}/fs.pdf`
  },
  {
    label: "Igor Jeziorski-Górecki",
    path: `${semesterIndividualDir}/ijg.pdf`
  },
  {
    label: "Kamil Konarzewski",
    path: `${semesterIndividualDir}/kk.pdf`
  },
  {
    label: "Kacper Urbański",
    path: `${semesterIndividualDir}/ku.pdf`
  },
  {
    label: "Paweł Charysz",
    path: `${semesterIndividualDir}/pc.pdf`
  },
];


export default function Page() {
  return (
    <div className='grid place-content-center container mx-auto my-4'>
      <div className='flex justify-center max-w-4xl flex-col'>
        <section className='mt-10 my-6 prose prose-sm sm:prose-base md:prose-lg lg:max-w-4xl text-foreground'>
          <h1 className='text-3xl font-bold mb-6 border-b-2 pb-2 border-accent text-primary'>
            Informacja o dokumentacji
          </h1>
          <p className='mb-4 leading-relaxed'>
            Dokumentacja projektu zostanie opublikowana po zakończeniu prac nad projektem. Szczegóły techniczne i procesowe będą dostępne w finalnej wersji dokumentacji.
          </p>

          <h2 className='text-2xl font-semibold mt-8 mb-4 text-primary relative pl-3 before:absolute before:left-0 before:w-1 before:h-full before:bg-accent'>
            Raporty projektu
          </h2>
        </section>

        {/* Main Report Download */}
        <section className='pl-4'>
          <h3 className='text-xl font-semibold mb-4'>
            Raport semestralny:
          </h3>
          <a
            href={semesterMainReport.path}
            target='_blank'
            className='text-accent hover:underline block'
          >
            {semesterMainReport.label}
          </a>

          {/* Individual Reports Downloads */}
          {semesterIndividualReports.length > 0 && (
            <div className='mt-6'>
              <h3 className='text-lg font-semibold mb-4'>
                Raporty indywidualne:
              </h3>
              <ul className='list-none'>
                {semesterIndividualReports.map((report) => (
                  <li
                    key={report.path}
                    className='relative pl-6 before:absolute before:left-0 before:top-[0.3em] before:text-accent before:content-["▹"] before:mr-2 before:leading-none mt-2'
                  >
                    <a
                      href={report.path}
                      target='_blank'
                      className='text-accent hover:underline'
                    >
                      {report.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </section>

        {/* API Documentation */}
        <section className='pl-4 mt-8'>
          <h3 className='text-xl font-semibold mb-4'>
            Dokumentacja API:
          </h3>
          <Link
            href="https://documenter.getpostman.com/view/36993515/2sAYdhKqiV"
            target='_blank'
            className='text-accent hover:underline block'
          >
            Dokumentacja API w Postman
          </Link>
        </section>
      </div>
    </div>
  );
}
