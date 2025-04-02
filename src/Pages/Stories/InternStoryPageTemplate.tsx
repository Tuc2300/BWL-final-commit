import { Link } from "react-router-dom";

interface InternStoryProps {
  Name: string;
  Role: string;
  Duration: number;
  Age: number;
  Story: string;
  Achievements: string[];
  ImageUrl?: string;
  Team: string;
  Location: string;
}

const InternStoryPageTemplate = ({
  Name,
  Role,
  Duration,
  Age,
  Story,
  Team,
  Achievements,
  ImageUrl,
  Location,
}: InternStoryProps) => {
  return (
    <div className="min-h-screen bg-white">
      {/* Back Navigation */}
      <nav className="bg-[#33312b] py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            to="/"
            className="text-[#fbba00] hover:text-yellow-400 transition-colors flex items-center"
          >
            <svg
              className="w-5 h-5 mr-2"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
            Zurück zur Hauptseite
          </Link>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Profile Header */}
        <div className="flex flex-col md:flex-row items-center mb-12">
          <div className="w-48 h-48 rounded-full bg-[#fbba00] mb-6 md:mb-0 md:mr-8 flex items-center justify-center overflow-hidden">
            {ImageUrl ? (
              <img
                src={ImageUrl}
                alt={Name}
                className="w-full h-full object-cover"
              />
            ) : (
              <span className="text-4xl text-white font-bold">
                {Name.charAt(0)}
              </span>
            )}
          </div>
          <div className="text-center md:text-left">
            <h1 className="text-4xl font-bold text-[#33312b] mb-2">{Name}</h1>
            <p className="text-xl text-gray-600 mb-1">{Role}</p>
            <p className="text-sm text-[#fbba00] font-semibold">{`${Age} Jahre alt`}</p>
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main Story */}
          <div className="lg:col-span-2">
            <div className="prose max-w-none">
              <h2 className="text-2xl font-bold text-[#33312b] mb-6">
                Meine Reise
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">{Story}</p>
            </div>
          </div>

          {/* Sidebar */}
          <div className="bg-gray-50 p-8 rounded-xl">
            <h3 className="text-xl font-semibold text-[#33312b] mb-4">
              Wichtigste Aufgaben
            </h3>
            <ul className="space-y-4">
              {Achievements.map((achievement, index) => (
                <li key={index} className="flex items-start">
                  <div className="w-6 h-6 bg-[#fbba00] rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                    <svg
                      className="w-3 h-3 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
                    </svg>
                  </div>
                  <span className="text-gray-600">{achievement}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 pt-6 border-t border-gray-200">
              <h3 className="text-xl font-semibold text-[#33312b] mb-4">
                Ausbildungsdetails
              </h3>
              <dl className="grid grid-cols-2 gap-4">
                <div>
                  <dt className="text-sm text-gray-500">Dauer</dt>
                  <dd className="text-[#33312b] font-medium">{`${Duration} Jahre`}</dd>
                </div>
                <div>
                  <dt className="text-sm text-gray-500">Team</dt>
                  <dd className="text-[#33312b] font-medium">{Team}</dd>
                </div>
                <div>
                  <dt className="text-sm text-gray-500">Standort</dt>
                  <dd className="text-[#33312b] font-medium">{Location}</dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default InternStoryPageTemplate;
