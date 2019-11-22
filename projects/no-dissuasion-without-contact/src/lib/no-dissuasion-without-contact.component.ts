import { Component, OnInit } from "@angular/core";

@Component({
  selector: "lib-no-dissuasion-without-contact",
  template: `
  <p></p>
    <h1 class="title">
      {{ texts.info.contact }}
    </h1>
    <p></p>
    <p><br /></p>
    <p></p>
    <a href="https://www.facebook.com/michael.spengler.5686">
      <i class="fa fa-facebook-official fa-3x" aria-hidden="true"></i>
    </a>

    <a
      href="https://chat.whatsapp.com/FNVd44Xn6TfGgzTf6PE2S0"
      style="padding-left: 1.7em"
    >
      <i class="fa fa-whatsapp fa-3x" aria-hidden="true"></i>
    </a>

    <a
      href="https://t.me/joinchat/CocyExVjtoAZARi6HCtmZA"
      style="padding-left: 1.7em"
    >
      <i class="fa fa-telegram fa-3x" aria-hidden="true"></i>
    </a>

    <a href="mailto:info@dance-planner.de"
    style="padding-left: 1.7em">
      <i class="fa fa-envelope-o fa-3x" aria-hidden="true"></i>
    </a>
    <p></p>
    <p><br /></p>
    <b>
      My Web Page is a Hobby Web Page under German Law.
    </b>

    <p><br /></p>
    <!-- Please find the according detailed information below and contact me if anything is difficult to understand. -->
    <p><br /></p>
    <h1>Impressum</h1>

    <h2>Angaben gem&auml;&szlig; &sect; 5 TMG</h2>
    <p>
      Michael Spengler<br />
      Zollhofgarten 8<br />
      Wohnung 401<br />
      69115 Heidelberg
    </p>

    <h2>Kontakt</h2>
    <p>
      Telefon: +49 (0) 151 67 83 38 69<br />
      E-Mail:
      <a target="_blank" href="mailto:michael@fance-fitness.com"
        >michael@fance-fitness.com</a
      >
    </p>
  <h1>
  KEINE ABMAHNUNG OHNE KONTAKT
</h1>

<p><br /></p>
Sollte der Inhalt fremde Rechte Dritter oder gesetzliche Bestimmungen
verletzen, informieren Sie mich ohne Kostennote. Ich garantiere, dass die zu
Recht beanstandeten Passagen unverzüglich entfernt werden, ohne dass von
Ihrer Seite die Einschaltung eines Rechtsbeistandes erforderlich ist.
Dennoch von Ihnen ohne vorherige Kontaktaufnahme ausgelöste Kosten werden im
Sinne der Schadensminderungspflicht zurückgewiesen und gegebenenfalls wird
Gegenklage wegen Verletzung vorgenannter Bestimmungen eingereicht.
</div>  `,
  styles: []
})
export class NoDissuasionWithoutContactComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
