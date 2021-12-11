## About The Project

This is a web app for managing and tracking small scaled product-based businesses. It facilitates a business with separate factory and shop. Helps the owner to track sales and production and identify malpractice. Additionally, it also provides statistics for the business owner like best selling products and revenue generated within a time period.

### Tech Stack

* [Node.js](https://nodejs.org/)
* [Express.js](https://expressjs.com/)
* HTML
* CSS
* JavaScript
* [Docker](https://docker.com/)
* [Heroku](https://heroku.com/)


<!-- GETTING STARTED -->
## Build By Yourself

The WebApp itself is hosted on Heroku, but is is very much possible to deploy it somewhere else or even run locally. Recommended method is by building a Docker image from the provided `Dockerfile`.

### Prerequisites

You will need to have Docker installed on your computer to use it locally.
* On Arch-based systems
  ```sh
     sudo pacman -S docker 
     sudo systemctl start docker
  ```
* On Windows
  ```sh
    winget install -e --id Docker.DockerDesktopEdgeInternal
  ```

### Installation

1. Make sure all requirements are met
2. Clone the repo and `cd` into the directory
   ```sh
   git clone https://github.com/vanillabase1lb/business_management.git
   cd business_management/
   ```
3. Enter your MongoDB database credentials in `server/config.js` (the current one is throwaway account, anything entered there might as well be public property)

4. Build Docker image (the build on main branch might not succeed, use `heroku` branch instead)
   ```sh
    docker build -t business_management . 
   ```
5. Run Docker container
   ```sh
    docker run  -it --init -p 8080:8080 business_management 
   ```

## Usage

You can now create a new business. Start by singing up as a business `Owner` and then create accounts for `Shop` and `Factory` managers.

Now the `Owner` can start adding products. The `Factory` can now make all available products and keep adding them throughout the day. Similarly the `Shop` can start selling these products.

The `Owner` can track all this progress from their dashboard. This product cycle resets every day. A more comprehensive overview is available for the business owner over at `logs` page. From the summary, the business can determine what products sells the most, what makes the most revenue and how much total revenue is being made over a period of time.

[Development History](https://github.com/vanillabase1lb/business_management/graphs/contributors)
