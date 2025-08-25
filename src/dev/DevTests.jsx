import React from 'react'

const VALID_PAGES = new Set(["home", "courses", "math", "reading", "writing"]);

export default function DevTests({ page, streak, lastCourse, progressTriplet }) {
  React.useEffect(() => {
    // 1) Page key valid
    if (!VALID_PAGES.has(page)) console.error("[DevTests] FAIL: invalid page key:", page);
    // 2) Buttons have valid type
    const valid = new Set(["button", "submit", "reset"]);
    const buttons = Array.from(document.querySelectorAll("button"));
    const bad = buttons.filter((b) => !valid.has((b.getAttribute("type") || "button").toLowerCase()));
    if (bad.length) console.error("[DevTests] FAIL: buttons with invalid type found");
    // 3) Streak looks sane
    if (typeof streak !== "number" || streak < 1) console.error("[DevTests] FAIL: streak should be >= 1", streak);
    // 4) lastCourse is valid
    const okCourse = new Set(["Math", "Reading", "Writing"]);
    if (!okCourse.has(lastCourse)) console.error("[DevTests] FAIL: lastCourse invalid", lastCourse);
    // 5) Progress shapes contain 1..4 keys
    const [mp, rp, wp] = progressTriplet || [];
    const keysOk = (p) => p && [1,2,3,4].every((k) => Object.prototype.hasOwnProperty.call(p, k));
    if (![mp, rp, wp].every(keysOk)) console.error("[DevTests] FAIL: progress objects missing level keys");
  }, [page, streak, lastCourse, progressTriplet]);
  return null;
}
