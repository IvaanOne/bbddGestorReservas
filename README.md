# Base de datos tipo gestor de reserva
---
Base de datos MySQL relacional para proyecto en geekshubs.

---
# Deploy en Heroku 
---

[Link del proyecto en heroku](https://ibl-fsd-bcn-p4.herokuapp.com/) 🌎


---

# Instrucciones y endpoints

---

1 - Abrir el link de heroku para arrancar automáticamente el servidor. (Tarda unos 10 segundos)

2 - Pasamos a postman donde copiaremos también el mismo link para empezar a lanzar peticiones.

## Endpoints

* /Reservas para recibir toda la información disponible sobre las reservas.

<br>

* /Reservas/(numero de id) para buscar una reserva a través de su id.

<br>

* /Reservas/cliente/(NombreCliente) para buscar tantas reservas como haya hecho el nombre del cliente si existiera. 

<br>

* /Reservas/telefono/(numerotelefono) para buscar reservas filtrándolas por número de teléfono.

<br>

* /Reservas/email/(email) para buscar reservas filtrándolas por el email de la reserva.

<br>

* /Reservas/hotel/(nombreHotel) para buscar reservas filtrando por el nombre del hotel.

<br>

* /Reservas/FechaE/(Fecha de entrada) para buscar reservas filtrando por la fecha de entrada de la reserva.

<br>

* /Reservas/FechaS/(Fecha de Salida) para buscar reservas filtrando por la fecha de salida de la reserva.
