# Aplicación CRUD backend

Esta aplicación es en respuesta a la prueba técnica solicitada por waddi, para elaborar un CRUD de posts.

## Consiguración inicial

### Script de la base de datos

Junto al directorio "server" hay un archivo `script_waddi-posts.sql` con el script de la base de datos.
La base de datos está creada en MySQL, hay que crear la base de datos corriendo el script antes mencionado.

### Configuración del archivo .env

Dentro del directorio "server" se encuantr un archivo .env que debe ser modificado con los valores de sus configuraciones de la base de datos creada.

`PORT=3001`

`DB_HOST='localhost'`

`DB_DATABASE='db_posts'`

`DB_USER='root'`

`DB_PASSWORD=''`

`DB_DIALECT='mysql'`

`SECRETORPRIVATEKEY='M1pru3b4_T3cNic@'`

## Instalación

Ingresar al directorio `cd server`, después instalar las dependencias con el siguiente comando

Ir al proyecto del directorio

```bash
  cd server
```

Instalar dependencias

```bash
  npm install
```

Iniciar el servidor

```bash
  npm start
```

## API Reference

Considerando que se dejo la configuración propuesta en el archivo .env, el host del CRUD es el siguiente:

```http
  http://localhost:3001
```

#### Login

```http
  POST /api/auth/login

  En el body:
  {
    "mail": "razadi07@gmail.com",
    "password": "admin"
  }
```

#### Listar usuarios

```http
  GET /api/usuarios
```

#### Get usuario por id

```http
  GET /api/usuarios/${id}
```

| Parameter | Type     | Description                   |
| :-------- | :------- | :---------------------------- |
| `id`      | `number` | **Requiredo**. Id del usuario |

#### Crear nuevo usuario

```http
  POST /api/usuarios

  En el body:
  {
    "mail": "jose@gmail.com",
    "password": "demo",
    "name": "José",
    "role": "USER_ROLE"
  }
```

| Hader     | Value                                  |
| :-------- | :------------------------------------- |
| `x-token` | **Requiredo**. token generado en login |

#### Modificar un usuario

```http
  PUT /api/usuarios/${id}

  En el body:
  {
    "mail": "jose@gmail.com",
    "password": "demo",
    "name": "José Tostado",
    "role": "USER_ROLE"
  }
```

| Hader     | Value                                  |
| :-------- | :------------------------------------- |
| `x-token` | **Requiredo**. token generado en login |

| Parameter | Type     | Description                   |
| :-------- | :------- | :---------------------------- |
| `id`      | `number` | **Requiredo**. Id del usuario |

#### Eliminar un usuario

```http
  DELETE /api/usuarios/${id}
```

| Hader     | Value                                  |
| :-------- | :------------------------------------- |
| `x-token` | **Requiredo**. token generado en login |

| Parameter | Type     | Description                   |
| :-------- | :------- | :---------------------------- |
| `id`      | `number` | **Requiredo**. Id del usuario |

---

#### Listar posts

```http
  GET /api/posts
```

#### Get post por id

```http
  GET /api/posts/${id}
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `id`      | `number` | **Requiredo**. Id del post |

#### Crear nuevo post

```http
  POST /api/posts

  En el body:
  {
    "title": "Primero",
    "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
  }
```

| Hader     | Value                                  |
| :-------- | :------------------------------------- |
| `x-token` | **Requiredo**. token generado en login |

#### Modificar un post

```http
  PUT /api/posts/${id}

  En el body:
  {
    "title": "Primero",
    "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
  }
```

| Hader     | Value                                  |
| :-------- | :------------------------------------- |
| `x-token` | **Requiredo**. token generado en login |

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `id`      | `number` | **Requiredo**. Id del post |

#### Eliminar un post

```http
  DELETE /api/posts/${id}
```

| Hader     | Value                                  |
| :-------- | :------------------------------------- |
| `x-token` | **Requiredo**. token generado en login |

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `id`      | `number` | **Requiredo**. Id del post |

---

#### Listar bitacora

```http
  GET /api/bitacora
```

#### Crear nuevo item de la bitacora

```http
  POST /api/bitacora

  En el body:
  {
    "userId": 3,
    "postId": 2,
    "action": "creó"
  }
```

---

#### Listar reviews

```http
  GET /api/reviews
```

#### Crear nuevo item de la reviews

```http
  POST /api/reviews

  En el body:
  {
    "userId": 3,
    "postId": 2,
    "rating": 0
  }
```

#### Modificar un reviews

```http
  PATCH /api/reviews/${userId}/${postId}

  En el body:
  {
    "rating": 2
  }
```

| Parameter | Type     | Description                   |
| :-------- | :------- | :---------------------------- |
| `userId`  | `number` | **Requiredo**. Id del usuario |
| `postId`  | `number` | **Requiredo**. Id del post    |

## Autor

- [@razadi](https://www.github.com/razadi)
