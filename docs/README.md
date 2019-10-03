Zlecenia HTTP od użytkownika wpadają do nginxa. On decyduje, czy wyświetlić statyczną część strony, przekazująć zapytanie do 
frontendu, czy może jest to jakaś operacja (poprzedzona kluczem _/v1/_). Jeśli jest to operacja, to wartość ta wędruje do kontenera backend.

Z kontenerem backend gada baza MySQL, która jest czwartym i ostatnim kontenerem w tym projekcie.

PM 
