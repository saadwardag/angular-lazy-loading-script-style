import { Component, Inject } from "@angular/core";
import { DOCUMENT } from "@angular/common";
@Component({
  selector: "my-app",
  templateUrl: "./app.component.html"
})
export class AppComponent {
  title = "NgTurkey";

  constructor(@Inject(DOCUMENT) private document: Document) {}

  lazyLoadStyle(cssFile: string) {
    console.log(cssFile);
    /* <head> <link id="lazy-theme" rel="stylesheet" type="text/css" href="lazy-first.css"></head> */
    const headElement = this.document.getElementsByTagName("head")[0];
    const existLinkElement = this.document.getElementById(
      "lazy-theme"
    ) as HTMLLinkElement;
    if (existLinkElement) {
      existLinkElement.href = cssFile;
    } else {
      const linkElement = this.document.createElement("link");
      linkElement.id = "lazy-theme";
      linkElement.rel = "stylesheet";
      linkElement.href = cssFile;
      headElement.appendChild(linkElement);
    }
  }
}
