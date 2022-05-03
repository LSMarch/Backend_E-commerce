# Backend_E-commerce ![Badge for license](https://img.shields.io/badge/license-mit-brightgreen)
[View a demo of the app](https://drive.google.com/file/d/1nQknjRMNHrX5IgsOr1ptwBOYIXGBqU0F/view)

## Table of Contents
- [About](#about)
- [Installation](#installation)
- [How-To](#how-to)
- [Contribution](#constribution)
- [Contact](#contact)
- [License](#license)

### [About](#table-of-contents)
This application is supplement a website to help business owners keep track of their inventory! The user is able to create a new category, product, or tag and it will automatically be stored in the `mysql database`. 

- User is able to view all `tags`,`categories` or `products` that have been created, or can search by a specific `id` number.
- User has the ability to create a new `tag`, `category`, or `product` and the data will be stored within the appropriate tables.
- The user can update a tag name simply by searching by the id and inputing the updated `tag`, `category`, or `product` name.
- If needed the user can delete a certain `tag`, `category`, or `product` by the desired `id`. 
### [Installation](#table-of-contents)
To run the application you will need `Node.js`, as well as the `Express`, `Mysql2`, `dotenv` and `Sequelized` packages.

### [How-To](#table-of-contents)
[See the app in action](https://drive.google.com/file/d/1nQknjRMNHrX5IgsOr1ptwBOYIXGBqU0F/view)

To use Backend_Ecommerce run `schema.sql` to create the database. Use `npm run seed` to add the given data into the database. `node index.js` or `npm start` in the terminal to open the server. In order to check the route use `Insomnia` or a similar program.

### [Contribution](#table-of-contents)
Pull requests are welcome! For any major changes please open an issue.

### [Contackt](#table-of-contents)
Questions?
Comments?
Concerns?

- Reach out on [GitHub](https://github.com/LSMarch)
- Email me at lsmarchetti01@gmail.com

### [License](#table-of-contents)
MIT License

Copyright (c) 2022 Libby Marchetti

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.