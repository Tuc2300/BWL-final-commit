import InternStoryPageTemplate from "./InternStoryPageTemplate";

export default function YevheniiStory() {
  return (
    <InternStoryPageTemplate
      Name={"Yevhenii Mazurenko"}
      Role={"Azubi"}
      Duration={3}
      Story={
        "Hallo, mein Name ist Yevhenii und ich bin 20 Jahre alt. Ich mache seit sechs Monaten meine Ausbildung bei Reiner SCT. Es war eine spannende Erfahrung, dem Team beizutreten, das am Zeiterfassungsterminal arbeitet." +
        "Da ich bereits etwas Erfahrung in der Softwareentwicklung habe, habe ich mich schnell an meine Aufgaben gewöhnt und fand sie machbar. Die unterstützende Teamumgebung hat es mir leicht gemacht, mich zu integrieren und effektiv mitzuwirken." +
        "An realen Problemen zu arbeiten und zu sehen, dass meine Beiträge etwas bewirken, war unglaublich bereichernd. Ich habe viel gelernt und bin sowohl beruflich als auch persönlich gewachsen.Ich bin dankbar für die Möglichkeit, Teil eines so großartigen Teams zu sein, und freue mich auf die bevorstehenden Herausforderungen."
      }
      Achievements={[
        "KI von Grund auf neu erstellen",
        "Beitrag zur Leistung der Website.",
      ]}
      Age={20}
      Team={"Timecard"}
      Location={"Büro"}
    />
  );
}
