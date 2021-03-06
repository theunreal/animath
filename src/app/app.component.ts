import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  cards = [{
    title: 'חיבור וקטורים',
    description: 'חיבור וקטורים מתבצע ע"י העתקה של אחד הוקטורים לקצהו של הוקטור השני. סכום הוקטורים יהיה הוקטור היוצא מנקודת המוצא של הוקטור הראשון ומגיע לקצהו של הוקטור השני.',
    fileName: '1.mp4'
  }, {
    title: 'משפט פיתגורס',
    description: 'משפט מפורסם בגאומטריה, המתאר את היחס בין שלוש צלעותיו של משולש ישר-זווית. המשפט קובע כי "סכום שטחי הריבועים, הבנויים על הניצבים במשולש ישר-זווית, שווה לשטח הריבוע הבנוי על היתר',
    fileName: '2.mp4'
  }, {
    title: 'אינטגרל רימן',
    description: 'סדרה של סכומי רימן המוצגים על ידי מלבנים עבור קטע מסויים בגרף. סכום המלבנים מתכנס לאינטגרל של הפונקציה בקטע זה.',
    fileName: '3.mp4'
  }, {
    title: 'משפט הסינוסים',
    description: 'משפט הסינוסים קובע כי היחס בין אורך צלע במשולש כללי לבין סינוס הזווית שמולה, שווה לקוטר המעגל החוסם את המשולש',
    fileName: '4.mp4'
  }, {
    title: 'מטען בשדה חשמלי',
    description: 'שדה חשמלי המתואר על ידי קווי שדה. קווי שדה הם קווים שכיוונם מתאר את כיוון תנועתו של מטען חיובי מנקודה מסוימת, ואורכם מתאר את גודל הכוח שיפעל על אותו מטען.',
    fileName: '5.mp4'
  }, {
    title: 'ערכי הפונקציות הטריגונומטריות' +
      'של זוויות מיוחדות',
    description: '',
    fileName: '6.mp4'
  }, {
    title: 'שדה וקטורי',
    description: 'כאן ניתן לראות כיצד שדה גובר אם נגדיל את הכוח שמייצר אותו בנקודה מסויימת',
    fileName: '7.mp4'
  }, {
    title: 'שדה סיבובי',
    description: 'תנועה של שתי חלקיקים בשדה ווקטורי סיבובי.',
    fileName: '8.mp4'
  }, {
    title: 'פרבולה',
    description: 'מקום הגאומטרי של הנקודות במישור שמרחק כל אחת מהן מנקודה נתונה (המוקד) שווה למרחקה מישר נתון (המדריך).',
    fileName: '9.mp4'
  }, {
    title: 'נגזרת',
    description: 'גבול של היחס שבו משתנה ערך הפונקציה בעקבות שינוי זעיר בערך הפרמטר.  הנגזרת מתארת את ההשתנות של פונקציה ביחס לשינוי הפרמטר שהיא מוגדרת לפיו.',
    fileName: '10.mp4'
  }];
}
