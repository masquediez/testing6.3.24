const { isRightSolutionForQuestion } = require("./Quiz");

describe("isRightSolutionForQuestion Funktion", () => {
  test("Überprüft, ob die Antwort für eine gegebene Frage korrekt ist", () => {
    // Testfall 1: Korrekte Antwort für Frage 1
    expect(
      isRightSolutionForQuestion("frage_1", "Weil er immer kalt gelötet ist.")
    ).toBeTruthy();

    // Testfall 2: Korrekte Antwort für Frage 2
    expect(
      isRightSolutionForQuestion(
        "frage_2",
        "Weil sie sich ständig im Code verheddern."
      )
    ).toBeTruthy();

    // Testfall 3: Korrekte Antwort für Frage 3
    expect(
      isRightSolutionForQuestion("frage_3", "Weil er einen Virus hatte.")
    ).toBeTruthy();

    // Testfall 4: Korrekte Antwort für Frage 4
    expect(isRightSolutionForQuestion("frage_4", "Logout.")).toBeTruthy();

    // Testfall 5: Korrekte Antwort für Frage 5
    expect(
      isRightSolutionForQuestion(
        "frage_5",
        "Sie hatte zu viele Back-End-Probleme."
      )
    ).toBeTruthy();

    // Testfall 6: Inkorrekte Antwort für Frage 2
    expect(
      isRightSolutionForQuestion(
        "frage_2",
        "Weil sie ständig im Code verheddern."
      )
    ).toBeFalsy();

    // Testfall 7: Keine solche Frage
    expect(() => {
      isRightSolutionForQuestion("frage_6", "Das ist nicht relevant.");
    }).toThrow(ReferenceError);

    // Testfall 8: Nicht-String-Antwort
    expect(() => {
      isRightSolutionForQuestion("frage_3", 123);
    }).toThrow(TypeError);
  });
});
