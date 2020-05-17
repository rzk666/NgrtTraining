// TARGILIM #3 //

// נתון האובייקט הבא:
const validator = {
    isValidMail = data => data.includes('@'),
    isValidUserName = data => data.length > 0,
    isValidPassword = data => data.length > 8,
}
// כתוב תוכניות הקולטת מייל, שם משתמש, וסיסמא מהמשתמש.
// התוכנה תוודא שהמייל, שם המשתמש, והסיסמא תקינים ותדפיס "הרשמה בוצעה בהצלחה"
// התוכנה תדפיס שגיאות בהתאם
// השתמש באובייקט ובמתודות שלו לוודא תקינות

// כתוב פונקציה שמקבלת מערך של מחרוזות, ומדפיסה את המחרוזות בתוך מלבן בצורה הבאה:
// ["hello", "test"]
// *********
// * hello *
// * test  *
// *********
// ["hi", "im", "rozadin"]
// ***********
// * hi      *
// * im      *
// * rozadin *
// ***********

// כתוב משחק בול פגיעה
// התכנית תג'נרט מספר רנדומלי בן 4 ספרות, לאחר מכן יזין מספרים בני 4 ספרות וינסה לנחש את המספר
// על כל קלט שיזין המשתמש הוא יקבל את הפלט הבא:
// קיים: x פגיעות: y
// קיים מציין כמה מספרים מתוך המספר שהכניס המשתמש נמצאים בסדר כלשהו במספר המקורי, ופגיעות יציין כמה מספרים מהמספר שהזין המשתמש נמצאים בדיוק באותו המקום
// דוגמא: מספר נבחר 4235
// input: 3164 -> output קיים:2 פגיעות:0
// input: 4530 -> output קיים:1 פגיעות:2
// input: 9871 -> output קיים:0 פגיעות:0
// התכנית תדפיס ברכות ותסיים לרוץ כשהמשתמש ינחש את המספר בהצלחה
// עלייך לוודא תקינות קלט
