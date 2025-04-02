import InternStoryPageTemplate from "./InternStoryPageTemplate";

export default function FabianStory() {
  return (
    <InternStoryPageTemplate
      Name={"Kretzschmar, Fabian"}
      Role={"Azubi"}
      Duration={3}
      Story={
        " Mein Name ist Fabian, ich bin 21 Jahre alt und seit einem halben Jahr Auszubildender zum Fachinformatiker für Anwendungsentwicklung bei REINER SCT. Schon vor meiner Ausbildung hatte ich erste Programmiererfahrungen gesammelt, was mir den Einstieg deutlich erleichtert hat." +
        " Besonders spannend finde ich die Arbeit im SUSY-Team, wo ich an der Entwicklung dieser innovativen Kommunikationshilfe für Senioren mitarbeiten darf. Bereits in den ersten Monaten durfte ich eigenständig kleinere Funktionen implementieren." +
        " Was mich besonders begeistert, ist die offene Atmosphäre im Team. Meine Kollegen nehmen sich immer Zeit, meine Fragen zu beantworten und unterstützen mich bei neuen Herausforderungen. In den regelmäßigen Code-Reviews lerne ich ständig dazu und kann meine Programmierkenntnisse stetig verbessern." +
        " Typischerweise arbeite ich an meinen zugewiesenen Projekten, die von der Fehleranalyse bis hin zur Implementierung neuer Features reichen." +
        " Rückblickend auf das erste halbe Jahr kann ich von keiner Reue berichten. Die Kombination aus modernen Technologien, sinnvollen Projekten und einem tollen Team macht die Arbeit jeden Tag aufs Neue spannend."
      }
      Achievements={[
        "Benutzeroberfläche für den Susy Updater.",
        "Konfigurationseditor-Programm für Susy.",
      ]}
      Age={21}
      Team={"SUSY"}
      Location={"Büro"}
    />
  );
}
