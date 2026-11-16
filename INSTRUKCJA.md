# Cenownik – instrukcja

## 1. Wrzucenie aplikacji do internetu (za darmo, raz)
Aparat w Safari działa tylko na stronie https, dlatego pliki trzeba gdzieś opublikować. Najprościej przez GitHub Pages:

1. Załóż darmowe konto na github.com.
2. Kliknij **New repository**, nazwij je `cenownik`, ustaw **Public**, utwórz.
3. Kliknij **uploading an existing file** i przeciągnij WSZYSTKIE pliki z tego folderu (index.html, sw.js, manifest.json, icon-*.png, pdf.min.mjs, pdf.worker.min.mjs, pdf-worker.mjs, rs-polyfill.mjs, LICENSE-pdfjs.txt). Zatwierdź przyciskiem **Commit changes**.
4. Wejdź w **Settings → Pages**, w „Branch” wybierz `main` i `/ (root)`, kliknij **Save**.
5. Po 1–2 minutach aplikacja będzie pod adresem `https://TWÓJ-LOGIN.github.io/cenownik/`.

Twoje dane (produkty, ceny, faktury) NIE trafiają na GitHub – są zapisane tylko w telefonie.

Inne darmowe opcje: Netlify Drop (app.netlify.com/drop – przeciągasz folder) albo Cloudflare Pages.

## 2. Instalacja na iPhonie
1. Otwórz ten adres w **Safari**.
2. Udostępnij → **Do ekranu początkowego**.
3. Uruchamiaj aplikację zawsze z ikony na ekranie (wtedy iOS nie kasuje danych).
4. Przy pierwszym skanowaniu zezwól na dostęp do aparatu.

## 3. Praca z dostawą
1. Otwórz fakturę PDF w aplikacji hurtowni albo w mailu → Udostępnij → **Zachowaj w Plikach**.
   (Działa też XML z KSeF i CSV.)
2. Zakładka **Dostawy** → Wybierz pliki → zaznacz PDF (może być kilka naraz).
3. Otwórz dostawę → zakładka **Kategorie** → popraw kategorie tam, gdzie aplikacja źle zgadła. Zapamięta to dla podobnych nazw.
4. Zakładka **Skanuj** → Włącz aparat → skanujesz produkt → widzisz koszt, zmianę od ostatniej dostawy i proponowaną cenę →
   **Zmień na …** albo **Zostaw …** albo wpisz własną.
5. W **Dostawy** przy fakturze widać, ile pozycji czeka jeszcze na decyzję.

## Ważne
- **PDF musi być „tekstowy”** (wygenerowany przez system hurtowni). Zdjęcie/skan faktury nie zadziała.
- **Wygląd:** Ustawienia → Wygląd: motyw auto/jasny/ciemny, kolor i rozmiar.
- **Zgrzewki / kartony:** jeśli na fakturze jest „op” (np. 6 szt.), wpisz na karcie produktu „Szt. w opakowaniu” = 6. Zapamięta się.
- **Brak EAN na fakturze:** przy pierwszym skanie wybierz produkt z listy – kod zostanie powiązany na stałe.
- **Kategorie:** zgadywane po nazwie (piwo, wódka → alkohol; ziemniaki, jabłka → warzywa). Popraw jednym kliknięciem, zapamięta się.
- **Zaokrąglanie:** domyślnie do 10 gr; reszta od 3 gr w górę → w górę (3,52 → 3,50; 3,53 → 3,60). Zmienisz w Ustawieniach.
- **Kopia zapasowa:** Ustawienia → Zapisz kopię (rób np. raz w tygodniu).
- **Korekty faktur** są pomijane przy imporcie.
- Aktualizacja aplikacji = podmiana plików na GitHubie (wrzuć nowe, zastąp stare); dane w telefonie zostają. Po aktualizacji zamknij i otwórz aplikację 2 razy.
