import { Link } from "react-router-dom";

// Logo (funktioniert bereits)
import LogoBigWhite from "../assets/logo_big_white.png";

// Produktbilder korrekt importieren
import CyberJackImage from "../assets/REINER-SCT-cyberJack_RFID_komfort.png";
import TanJackImage from "../assets/REINER-SCT-tanJack-photo-QR.png";
import AuthenticatorImage from "../assets/REINER-SCT-Authenticator.png";
import SusyImage from "../assets/REINER-SCT-SuSy.png";
import Terminal3Image from "../assets/REINER-SCT-Terminal-3.png";
import TimeCardRFIDImage from "../assets/REINER-SCT-timeCard-RFID-externer-Leser-V3.png";

interface IMilestoneData {
  year: string;
  title: string;
  description: string;
}

function Milestone({
  Milestone,
  Index,
}: Readonly<{
  Milestone: IMilestoneData;
  Index: number;
}>) {
  return (
    <div
      key={Milestone.year}
      className={`mb-12 md:flex ${
        Index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
      }`}
    >
      <div className="md:w-1/2 md:px-8">
        <div className="p-6 bg-white shadow-lg rounded-lg relative md:max-w-md">
          {/* Improved Year Badge */}
          <div className="absolute -top-6 left-1/2 -translate-x-1/2 md:left-4 md:translate-x-0 w-16 h-16 bg-white border-4 border-[#fbba00] rounded-full flex items-center justify-center flex-col">
            <svg
              className="w-5 h-5 text-[#fbba00] mb-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 10V3L4 14h7v7l9-11h-7z"
              />
            </svg>
            <span className="text-[#33312b] font-bold text-sm">
              {Milestone.year}
            </span>
          </div>
          <h3 className="text-xl font-semibold text-[#33312b] mb-2 mt-4">
            {Milestone.title}
          </h3>
          <p className="text-gray-600">{Milestone.description}</p>
        </div>
      </div>
    </div>
  );
}

const milestones: IMilestoneData[] = [
  {
    year: "2024",
    title: "Einführung von FIDO Stick Pro und SUSY",
    description:
      "REINER SCT stellt zwei wichtige Innovationen vor: Den FIDO Stick Pro USB-A/C für hochsichere Zwei-Faktor-Authentisierung und SUSY, eine speziell entwickelte Kommunikationshilfe für Senioren.",
  },
  {
    year: "2023",
    title: "Neue Sicherheitslösungen und SUSY Präsentation",
    description:
      "Mit dem REINER SCT Authenticator mini und REINER SCT Login werden neue Sicherheitslösungen eingeführt. SUSY wird erfolgreich auf der Altenpflegemesse in Nürnberg präsentiert.",
  },
  {
    year: "2022",
    title: "Erweiterung der timeCard Familie",
    description:
      "Die timeCard Familie wird um die Terminal App erweitert. Der REINER SCT Authenticator mini wird auf der it-sa vorgestellt. Die timeCard erhält eine Schnittstelle für den digitalen Abruf der Arbeitsunfähigkeitsbescheinigung (eAU).",
  },
  {
    year: "2021",
    title: "Einführung des cyberJack RFID komfort FON",
    description:
      "Einführung des cyberJack RFID komfort FON für barrierefreie Nutzung und des timeCard Terminal 3 mini. Zum 10-jährigen Jubiläum des elektronischen Personalausweises erscheint eine Limited Edition des cyberJack RFID komfort in Weiß.",
  },
  {
    year: "2019",
    title: "Entwicklungen im Bereich mobile Zahlungslösungen",
    description:
      "Wichtige Entwicklungen im Bereich mobile Zahlungslösungen mit cyberJack POS und Einführung des smartHSM. Launch der timeCard 10 Zeiterfassung und Weiterentwicklung der tanJack-Serie.",
  },
  {
    year: "2016",
    title: "Fokus auf digitale Transformation",
    description:
      "Fokus auf digitale Transformation mit timeCard blue und Kooperation mit DATEV. Einführung der timeCard 6 Serie mit neuer Benutzeroberfläche und erweiterten Funktionen.",
  },
  {
    year: "2013",
    title: "Innovation im Cloud-Bereich",
    description:
      "Innovation im Cloud-Bereich mit cloudCockpit. Weiterentwicklung der timeCard-Produktfamilie mit Version 5 und mobilen Apps.",
  },
  {
    year: "2010",
    title: "Mehrere BSI-Zertifizierungen und Auszeichnungen",
    description:
      "Mehrere BSI-Zertifizierungen für cyberJack RFID-Produkte. Auszeichnung mit dem red dot Design Award. Einführung innovativer Lösungen wie cyberJack compact und OWOK loginCard.",
  },
];

function Product({ Name, Image }: Readonly<{ Name: string; Image: string }>) {
  return (
    <div key={Name} className="bg-white p-6 rounded-xl shadow-lg">
      <img
        src={Image}
        alt={Name}
        className="w-full h-48 object-cover mb-4 rounded-lg"
      />
      <h3 className="text-xl font-semibold text-[#33312b]">{Name}</h3>
    </div>
  );
}

const AboutUsPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <nav className="top-0 fixed w-full bg-[#33312b] shadow-lg z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <Link to="/" className="flex-shrink-0">
              <img src={LogoBigWhite} className="h-9" />
            </Link>
            <div className="hidden md:flex space-x-8">
              <Link
                to="/"
                className="text-white hover:text-[#fbba00] transition-colors"
              >
                Home
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-[#33312b] mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-[#fbba00] mb-6">
            Über uns
          </h1>
          <p className="text-xl text-white mb-8 max-w-3xl mx-auto">
            Seit 1997 innovativ und mit umfassenden Lösungen weltweit.
          </p>
        </div>
      </section>

      {/* History Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-[#33312b]">
                Unsere Reise
              </h2>
              <p className="text-gray-600 leading-relaxed">
                REINER SCT entwickelt und produziert seit 1997 in Deutschland
                und bietet bis hin zum Vertrieb und Endkundenservice sämtliche
                Leistungen aus einer Hand. Das Unternehmen ist weltweit tätig
                und gehört zur REINER-Gruppe, die sich seit 1913 in
                Familienbesitz befindet. Es hat seinen Sitz in Furtwangen im
                Schwarzwald und beschäftigt 50 Mitarbeiter.
              </p>
            </div>
            <img
              src="https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_1536/https://www.reiner-sct.com/wp-content/uploads/2024/01/galerie_reinersct_cchipkartenleser_cyberjackrfidcomfort-3-1536x898.jpg"
              className="size-full h-96 rounded-xl"
              alt="Firmengebäude in Furtwangen"
            />
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="p-8 bg-[#33312b] rounded-xl text-white">
              <h3 className="text-2xl font-bold text-[#fbba00] mb-4">
                Unsere Mission
              </h3>
              <p className="leading-relaxed">
                Wir wollen die digitale Welt mit innovativen Kartenlesern,
                Zahlungsterminals und Zugangskontrollsystemen sichern und so das
                Vertrauen und die Effizienz in Unternehmen und im öffentlichen
                Sektor steigern.
              </p>
            </div>
            <div className="p-8 bg-white rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold text-[#33312b] mb-4">
                Unsere Vision
              </h3>
              <p className="text-gray-600 leading-relaxed">
                REINER SCT positioniert sich als innovativer Technologieführer,
                der traditionelle Schwarzwälder Werte mit modernster Technik
                verbindet. Das Unternehmen strebt danach, durch seine Produkte
                das private und betriebliche Leben zu erleichtern und dabei
                höchste Qualitätsstandards zu erfüllen.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#33312b] mb-12 text-center">
            Unsere Produkte
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Product Name={"Chipkartenleser"} Image={CyberJackImage} />
            <Product Name={"Generatoren"} Image={TanJackImage} />
            <Product Name={"Authenticator"} Image={AuthenticatorImage} />
            <Product Name={"Susy"} Image={SusyImage} />
            <Product Name={"Zeiterfassungssoftware"} Image={Terminal3Image} />
            <Product Name={"Zutrittskontrollen"} Image={TimeCardRFIDImage} />
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-[#33312b] mb-6">
                Standort
              </h2>
              <p className="text-gray-600 mb-4">
                Unser Hauptsitz befindet sich im Herzen des Schwarzwalds:
                <br />
                <strong className="text-[#fbba00]">
                  Furtwangen, Deutschland
                </strong>
              </p>
              <div className="space-y-2">
                <p className="text-gray-600">✓ Zentrum für technologische Innovation</p>
                <p className="text-gray-600">✓ Eng vernetzt mit der Hochschule Furtwangen</p>
                <p className="text-gray-600">✓ Internationaler Vertrieb mit lokaler Produktion</p>
              </div>
            </div>
            <img
              src="https://www.timecard.de/wp-content/uploads/2022/02/Gruppe-maskieren-5-1.jpg"
              className="w-full rounded-xl shadow-lg"
              alt="Firmengebäude in Furtwangen"
            />
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#33312b] text-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <h2 className="text-3xl font-bold text-[#fbba00] mb-12 text-center">
      Warum wir?
    </h2>
    <div className="grid md:grid-cols-2 gap-12 items-start">
      {/* Linke Spalte: Technologische Expertise */}
      <div className="space-y-6">
        <h3 className="text-2xl font-semibold text-left">Technologische Expertise</h3>
        <ul className="space-y-4">
          <li className="flex items-center">
            <span className="text-[#fbba00] w-6 text-center text-xl">✓</span>
            <span className="ml-3">Entwicklung von Sicherheitssystemen seit 1997</span>
          </li>
          <li className="flex items-center">
            <span className="text-[#fbba00] w-6 text-center text-xl">✓</span>
            <span className="ml-3">100% "Made in Germany" Produktion</span>
          </li>
          <li className="flex items-center">
            <span className="text-[#fbba00] w-6 text-center text-xl">✓</span>
            <span className="ml-3">Zertifizierte IT-Sicherheit nach ISO-Standards</span>
          </li>
        </ul>
      </div>
      {/* Rechte Spalte: Regionale Verankerung */}
      <div className="space-y-6">
        <h3 className="text-2xl font-semibold text-right">Regionale Verankerung</h3>
        <ul className="space-y-4">
          <li className="flex items-center justify-end">
            <span className="mr-3">Hochtechnologie-Standort Schwarzwald</span>
            <span className="text-[#fbba00] w-6 text-center text-xl">✓</span>
          </li>
          <li className="flex items-center justify-end">
            <span className="mr-3">Langjährige Kooperation mit der HFU</span>
            <span className="text-[#fbba00] w-6 text-center text-xl">✓</span>
          </li>
          <li className="flex items-center justify-end">
            <span className="mr-3">Nachhaltige Regionalentwicklung</span>
            <span className="text-[#fbba00] w-6 text-center text-xl">✓</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</section>



      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#33312b] mb-12 text-center">
            Unsere Vorteile
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-[#fbba00] p-8 rounded-xl">
              <h3 className="text-2xl font-bold text-[#33312b] mb-4">
                Für Kunden
              </h3>
              <ul className="space-y-4">
                <li>24/7 Support & individuelle Schulungen</li>
                <li>Intuitive Bedienoberflächen</li>
                <li>5 Jahre Garantie auf alle Hardwareprodukte</li>
                <li>DSGVO-konforme Lösungen</li>
              </ul>
            </div>
            <div className="bg-[#33312b] p-8 rounded-xl text-white">
              <h3 className="text-2xl font-bold text-[#fbba00] mb-4">
                Für Partner
              </h3>
              <ul className="space-y-4">
                <li>Individuelle Anpassungsmöglichkeiten</li>
                <li>Globale Vertriebsunterstützung</li>
                <li>Gemeinsame Weiterentwicklung</li>
                <li>Transparente Prozesse</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#33312b] mb-12 text-center">
            Unsere Kunden
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {[
              "Banken & Finanzdienstleister",
              "Mittelstand & Konzerne",
              "Öffentlicher Sektor",
              "Privatkunden",
            ].map((client) => (
              <div key={client} className="bg-white p-6 rounded-xl shadow-lg">
                <h3 className="text-xl font-semibold text-[#33312b]">
                  {client}
                </h3>
                <p className="text-gray-600 mt-2">
                  {
                    {
                      "Banken & Finanzdienstleister":
                        "Sichere Transaktionssysteme",
                      "Mittelstand & Konzerne":
                        "Zeiterfassung & Zugangskontrolle",
                      "Öffentlicher Sektor":
                        "Hochsichere Identifikationslösungen",
                      Privatkunden: "Benutzerfreundliche Home-Security",
                    }[client]
                  }
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Milestones */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-[#33312b] mb-16">
            Wichtige Meilensteine
          </h2>
          <div className="relative">
            <div className="hidden md:block absolute left-1/2 w-1 bg-gray-200 h-full"></div>
            {milestones.map((milestone, index) => (
              <Milestone
                key={milestone.year}
                Milestone={milestone}
                Index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#fbba00]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-[#33312b] mb-6">
            Bereit, sich unserer Reise anzuschließen?
          </h2>
          <p className="text-xl text-[#33312b] mb-8 max-w-3xl mx-auto">
            Entdecken Sie Ausbildungsmöglichkeiten und werden Sie Teil unserer
            Erfolgsgeschichte
          </p>
          <a
            target="_blank"
            href="https://www.reiner-sct.com/karriere/"
            className="bg-[#33312b] text-white px-8 py-3 rounded-lg hover:bg-opacity-90 transition-all"
          >
            Offene Stellen anzeigen (Link führt zur echten Seite)
          </a>
        </div>
      </section>
    </div>
  );
};

export default AboutUsPage;
