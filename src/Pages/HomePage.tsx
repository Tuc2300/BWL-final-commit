import { Link } from "react-router-dom";
import LogoBigWhite from "../assets/logo_big_white.png";
import Organigram from "../Components/Organigram";
import { FaLock, FaLightbulb, FaHandsHelping, FaEye } from "react-icons/fa";
import React from "react";
function TopBarButton({ Href, Name }: Readonly<{ Href: string; Name: string }>) {
  return (
    <a
      href={Href}
      className="text-white hover:text-[#fbba00] transition-colors"
    >
      {Name}
    </a>
  );
}

function CoreValue({
  Name,
  Description,
  Icon,
}: Readonly<{
  Name: string;
  Description: string;
  Icon: React.JSX.Element;
}>) {
  return (
    <div className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow">
      <div className="size-12 bg-[#fbba00] rounded-lg mb-4 relative">
        <div className="size-8 absolute top-0 bottom-0 left-0 right-0 m-auto">
          {Icon}
        </div>
      </div>
      <h3 className="text-xl font-semibold text-[#33312b] mb-2">{Name}</h3>
      <p className="text-gray-600">{Description}</p>
    </div>
  );
}

function InternExperience({
  Name,
  ShortStory,
  ShortName,
  PageLink,
}: Readonly<{
  Name: string;
  ShortStory: string;
  ShortName: string;
  PageLink: string;
}>) {
  return (
    <Link
      to={PageLink}
      className="bg-gray-50 p-6 rounded-xl hover:shadow-md transition-all relative"
    >
      <div className="flex items-center mb-4">
        <div className="w-16 h-16 rounded-full bg-[#fbba00] mr-4 flex items-center justify-center">
          <span className="text-2xl text-white font-bold">{ShortName}</span>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-[#33312b]">{Name}</h3>
          <p className="text-gray-600">Azubi</p>
          <p className="text-sm text-[#fbba00]">Winter 2025</p>
        </div>
      </div>
      <p className="text-gray-600 italic relative pl-6">
        <span className="absolute left-0 text-3xl text-[#fbba00]">“</span>
        {ShortStory}
      </p>
      <FaEye className="size-8 absolute right-5 bottom-5 text-[#33312b]" />
    </Link>
  );
}

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed w-full bg-[#33312b] shadow-lg z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex-shrink-0">
              <img src={LogoBigWhite} className="h-9" />
              <span className="text-2xl font-bold text-[#fbba00]"></span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              <Link
                to={"/culture"}
                className="text-white hover:text-[#fbba00] transition-colors"
              >
                Über uns
              </Link>
              <TopBarButton Href={"#values"} Name={"Grundwerte"} />
              <TopBarButton Href={"#team"} Name={"Unser Team"} />
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="about" className="pt-24 pb-12 bg-[#fbba00]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-[#33312b] mb-6">
            Willkommen bei Reiner SCT
          </h1>
          <p className="text-xl text-[#33312b] mb-8 max-w-3xl mx-auto">
            Sicherung der digitalen Welt durch Innovation und Vertrauen.
          </p>
          <Link
            to={"/culture"}
            className="bg-[#33312b] text-white px-8 py-3 rounded-lg hover:bg-opacity-90 transition-all"
          >
            Erkunde unsere Kultur
          </Link>
        </div>
      </section>

      {/* Core Values Section */}
      <section id="values" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-[#33312b] mb-12">
            Unsere Grundwerte
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <CoreValue
              Name="Sicherheit"
              Description={
                "Wir legen größten Wert auf die Sicherheit und Integrität digitaler Transaktionen und Zugriffe und gewährleisten so Vertrauen und Zuverlässigkeit für unsere Kunden."
              }
              Icon={<FaLock className="size-full" />}
            />
            <CoreValue
              Name="Innovation"
              Description={
                "Wir treiben den Fortschritt mit Spitzentechnologie voran und setzen neue Maßstäbe in digitaler Sicherheit und Effizienz."
              }
              Icon={<FaLightbulb className="size-full" />}
            />
            <CoreValue
              Name="Zusammenarbeit"
              Description={
                "Wir glauben an die Kraft der Teamarbeit und fördern starke Partnerschaften, um umfassende und effektive Lösungen zu liefern."
              }
              Icon={<FaHandsHelping className="size-full" />}
            />
          </div>
        </div>
      </section>

      <section id="stories" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-[#33312b] mb-12">
            Azubi-Erfahrung
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <InternExperience
              Name={"Yevhenii Mazurenko"}
              PageLink="/yevhenii"
              ShortStory={
                "Der Einstieg bei Reiner SCT war eine spannende und lohnende Reise. Die Arbeit an realen Projekten hat mir geholfen, sowohl beruflich als auch persönlich zu wachsen."
              }
              ShortName={"YM"}
            />
            <InternExperience
              Name={"Kretzschmar, Fabian"}
              PageLink="/fabian"
              ShortStory={
                "Meine Ausbildung als Fachinformatiker bei REINER SCT ist ein spannendes Abenteuer im SUSY-Team. Das unterstützende Team und die vielfältigen Projekte machen jeden Arbeitstag zu einer bereichernden Erfahrung."
              }
              ShortName={"KF"}
            />
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-[#33312b] my-12">
            Organigramm
          </h2>
          <Organigram />
        </div>
      </section>
      {/* Footer */}
      <footer className="bg-[#33312b] text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold text-[#fbba00] mb-4">
                Reiner SCT GmbH & Co. KG
              </h3>
              <p className="text-gray-300">© 2025 All rights reserved</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
