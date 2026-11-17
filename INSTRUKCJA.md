# Cenownik 1.0.0 – instrukcja

## Co robi
Czyta faktury z hurtowni (PDF, plik .455, XML z KSeF, CSV), zapamiętuje ceny zakupu i podpowiada cenę na półkę: koszt brutto + narzut kategorii, zaokrąglony po sklepowemu. Pokazuje zmiany od ostatniej dostawy, a podwyżki (szczególnie napojów i alkoholu) oznacza wyraźnie.

## 1. Publikacja (raz, za darmo)
Aparat w Safari działa tylko na stronie https, więc pliki lądują na GitHub Pages: repozytorium **Public**, pliki z tego folderu w głównym katalogu, **Settings → Pages → Branch `main` / `(root)`**. Dane (produkty, ceny, faktury) NIE trafiają na GitHub, są tylko w telefonie.
Pliki: index.html, sw.js, manifest.json, icon-180/192/512.png, pdf.min.mjs, pdf.worker.min.mjs, pdf-worker.mjs, rs-polyfill.mjs, LICENSE-pdfjs.txt.

## 2. Instalacja na iPhonie
Otwórz adres w **Safari** → Udostępnij → **Do ekranu początkowego**. Uruchamiaj zawsze z ikony. Przed usunięciem skrótu zrób kopię (Ustawienia → Zapisz kopię), bo dane są przypisane do aplikacji.

## 3. Praca z dostawą
1. Zapisz fakturę w Plikach (PDF z Eurocash, plik **.455**, XML z KSeF lub CSV).
2. **Dostawy → Wybierz pliki.**
3. Otwórz dostawę. Na górze możesz **Pokazać** wybrany rodzaj (np. Napoje, Alkohol) i **Sortować** (Ważność / Nazwa A–Z / Rodzaj).
4. **Przesuń produkt w prawo**, żeby ustawić cenę podpowiedzianą przez aplikację (u dołu pojawi się „Cofnij"). Dotknięcie otwiera kartę produktu, gdzie można wpisać własną cenę.
5. Zakładka **Skanuj**: aparat lub wpisanie kodu pokazuje koszt, zmianę i proponowaną cenę.
6. Karta „do oznaczenia" na ekranie Skanuj to lista metek i cenówek do wymiany; odhaczasz je ✓.
Okno produktu lub dostawy zamkniesz ✕, dotknięciem tła albo zsunięciem uchwytu u góry w dół.

## Ustawienia, które warto znać
- **Rabat Eurocash** (domyślnie 2%): cena zakupu liczona jak w aplikacji Eurocash, czyli netto minus rabat obcięte do groszy, potem VAT.
- **Nie zmieniaj ceny, gdy różnica < 10 gr.**
- **Kategorie i narzuty**, cenówka na półce zamiast metek (np. alkohol), kolory.
- **Zaokrąglanie** do 10 gr, w górę od 3 gr reszty.
- **Wygląd:** motyw auto/jasny/ciemny, kolor, rozmiar.

## Ważne
- PDF musi być tekstowy (z systemu hurtowni). Zdjęcie lub skan nie zadziała.
- Plik .455 jest najdokładniejszy, ale nie ma bonów. Rabat bierze się wtedy z ustawienia powyżej.
- Zgrzewki: na karcie produktu wpisz „Szt. w opakowaniu".
- Korekty faktur są pomijane przy imporcie.
- **Aktualizacja** = podmiana plików na GitHubie. Po niej zamknij aplikację całkiem i otwórz ją ponownie. Numer wersji jest na dole Ustawień.

## Nowości w 1.3.0
- **Piwo i drinki (34%)** – piwo, cydry i gotowe drinki (np. whisky z colą) mają własną kategorię z marżą 34%; wysokoprocentowy alkohol zostaje przy 25%.
- **Nowe kolory** – podwyżki czerwone, obniżki zielone, nowe produkty niebieskie; lepszy kontrast w trybie jasnym i ciemnym.
- **Szybszy skaner** – kod można trzymać poziomo, pionowo i do góry nogami. Skaner sprawdza całą klatkę i zatrzymuje się po pierwszym pewnym odczycie.

## Nowości w 1.4.0
- **Tryb łatwy** (Ustawienia, pierwszy przełącznik) – większe litery i przyciski, ukryte zaawansowane opcje (kategorie, liczenie ceny, filtry, historia), wyłączone przesuwanie palcem, dłużej widoczny przycisk „Cofnij”. Cenę ustawia się dotykając produktu i wielkiego zielonego przycisku.
- **Style wyglądu** – Domyślny, Papier, Ocean, Las, Grafit (czarny OLED w trybie ciemnym) i Kontrast (dla słabszego wzroku). Działają w trybie jasnym i ciemnym, osobno wybierasz kolor akcentu.
