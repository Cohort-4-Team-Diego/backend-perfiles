# Backend-Perfiles
Primer proyecto Platzi Master que tiene como objetivo mostrar la información de cada uno de los integrantes del poderoso y estupendo Cohort 4.

## Documentación 
API para ser consumida desde un framework frontend.

## Pasos para colaborar
1. Clonar `https://github.com/Cohort-4-Team-Diego/backend-perfiles.git`
2. `npm install` o `npm i`
3. Crear nueva rama con `git checkout -b (nombre de la rama)`
4. `npm run dev`
5. `git push origin (nombre de tu rama)`
6. Crear el pull request en GitHub

## Consumir servicio
#### GET Perfiles
URL GET: `localhost:5000/profiles`
>Response 
```
[
    {
        "_id": "5f11044497f9b2041415ea37",
        "name": "Diego",
        "birthdate": "1991-01-01T00:00:00.000Z",
        "origin_city": "Medellin",
        "country": "Colombia",
        "createdAt": "2020-07-17T01:52:04.764Z",
        "updatedAt": "2020-07-17T01:52:04.764Z",
        "__v": 0
    },
    {
        "_id": "5f11047a45cc4a5edbbe2055",
        "name": "Diego 2",
        "birthdate": "1991-01-01T00:00:00.000Z",
        "origin_city": "Medellin",
        "country": "Colombia",
        "createdAt": "2020-07-17T01:52:58.231Z",
        "updatedAt": "2020-07-17T01:52:58.231Z",
        "__v": 0
    }
]
```
#### POST Perfiles
URL POST: `localhost:5000/profiles`
>Body 
```
{
  "name": "Ildebrando Mora",
  "birthdate": "1988-04-09",
  "country": "Colombia",
  "origin_city": "La union N",
  "technical_profile": "Backend",
  "platzi_profile": "ilder948",
  "twitter_profile": "ilder948",
  "linkedin_profile": "ilder948",
  "github_profile": "ilder948",
  "role": "Full Stak",
  "superpower": "Trabajo en equipo",
  "weakness": "aaaa",
  "description": "Especializarme en Full Stack",
  "photo": "",
  "email": "ilder948@gmail.com",
  "facebook": "ilder948"
}
```
#### UPDATE Perfiles
URL PATCH: `localhost:5000/profiles/{id}`
>Body 
```
{
  "name": "Ildebrando Mora",
  "birthdate": "1988-04-09",
  "country": "Colombia",
  "origin_city": "La union N",
  "technical_profile": "Backend",
  "platzi_profile": "ilder948",
  "twitter_profile": "ilder948",
  "linkedin_profile": "ilder948",
  "github_profile": "ilder948",
  "role": "Full Stak",
  "superpower": "Trabajo en equipo",
  "weakness": "aaaa",
  "description": "Especializarme en Full Stack",
  "photo": "",
  "email": "ilder948@gmail.com",
  "facebook": "ilder948"
}
```

#### DELETE Perfiles
URL DELETE: `localhost:5000/profiles/{id}`
>Response
```
{
  status: "Dato Eliminado"
}
```

