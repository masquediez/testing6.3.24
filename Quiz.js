const Fragen = {
  Fragen: [
    {
      Frage: "Warum hat der Informatiker immer eine Jacke dabei?",
      Antwort: "Weil er immer kalt gelötet ist.",
      Frage_key: "frage_1",
    },
    {
      Frage: "Warum haben Programmierer keine Zeit für einen Haarschnitt?",
      Antwort: "Weil sie sich ständig im Code verheddern.",
      Frage_key: "frage_2",
    },
    {
      Frage: "Warum war der Computer krank?",
      Antwort: "Weil er einen Virus hatte.",
      Frage_key: "frage_3",
    },
    {
      Frage: "Was sagt ein Informatiker, wenn er das Haus verlässt?",
      Antwort: "Logout.",
      Frage_key: "frage_4",
    },
    {
      Frage: "Warum wurde die Website verhaftet?",
      Antwort: "Sie hatte zu viele Back-End-Probleme.",
      Frage_key: "frage_5",
    },
  ],
};

function isRightSolutionForQuestion(questionKey, answer) {
  const question = Fragen.Fragen.find((item) => item.Frage_key === questionKey);

  if (!question) throw ReferenceError("No such question");
  if (typeof answer !== "string")
    throw TypeError("Answer can only be a string");

  if (answer === question.Antwort) {
    return true;
  }
  return false;
}

module.exports = { isRightSolutionForQuestion };
