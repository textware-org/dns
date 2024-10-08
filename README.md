# dns
routing over cname services


Textware to rozwiazanie dla serwera z usługami udostęonianymi w modelu o SaaS poprzez CNAME dla domeny klienta. 
Konfiguracja po stronie klienta wymaga podania rekordu CNAME serwera userapp.textware.org  
dla przykładowej domeny domenaklienta.com, pod którą będzie widoczna usługa w języku php, nodej lub python. 
Usługa z CNAME powinna również udostępniać szyfrowanie dla domeny klienta, aby strona pod domeną klienta domenaklienta.com, była udsotępniana przez protokół https:// 

- Skrypt instalacji na zewnętrznym serwerze z numerem IP

- Let's encrypt do generowania certyfikatów 

- API dla cloduflare do konfiguracji DNS domen klientów 

- panel klienta do zamawiania uslugi, gdzie moze wpisac nazwe uslugi, wybrac aplikacje z listy i domene pod ktora chce uruchomic usluge, po wyslaniu zamowienia powinno byc kolejno wygenerowany certyfikat i rekord dla domeny klienta w cloudflare, wykorzystaj react dla fronetnd i przygotuj wersje produkcyjną zlaczeniem sie z serwerem poprzez ssh i deploymentem na serwerze wszystkich zmian
