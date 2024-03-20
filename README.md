[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/ProfessorBlackman/mini_frontend">
    <img src="https://ik.imagekit.io/methuselah/Mini/icons/Component%203.svg?updatedAt=1710942935127" alt="Logo" width="80" height="80">
  </a>
<h3 align="center">Mini</h3>
<p align="center">
    A url shortener
    <br />
    <a href="https://github.com/ProfessorBlackman/mini_frontend"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://github.com/ProfessorBlackman/mini_frontend">View Website</a>
    ·
    <a href="https://github.com/ProfessorBlackman/mini_frontend/issues">Report Bug</a>
    ·
    <a href="https://github.com/ProfessorBlackman/mini_frontend/issues">Request Feature</a>
  </p>
</div>

## Overview

This is a URL shortener platform with various features aimed at providing a robust and customizable solution for shortening URLs and managing redirects.

## Features

### URL Shortening

- URLs are shortened to a maximum length of "domain.com"/{7 characters}.
- URLs can be set to expire.
- Users can create custom aliases for their shortened URLs.
- Users can opt to receive notifications when someone uses their shortened link.

### Redirection

- URLs can require authentication before redirection.
- Notifications for shortened URLs being used are sent during redirection.
- Fast redirection performance.

### Custom Alias

- Users can create their own alias for URL shortening.
- Users should be able to use their own domain names for shortening.
- Custom aliases must be at most 7 characters in length and unique.

### Analytics

- Keep track of various metrics, including most visited URLs, number of visits per URL, demographics of visits, demographics of users (shorteners), and devices used by visitors to access links.

### API

- Frontend API for interacting with the platform.
- Third-party integration API.
- API documentation using Swagger for frontend and ReDoc for backend.

### Authentication and Authorization

- Supported authentication methods: username and password, OAuth (Google and Microsoft).
- Authentication and authorization available for URLs through personas.
- Users can create custom authorization pages for URL redirects.
- Authorization based on demographics.

## Personas

- Personas are authentication identities created by users.
- These identities can be granted access to certain locations on the platform or URLs.
- Activities of personas are monitored, triggering notifications for any performed activities.

## Documentation

For detailed documentation, please visit [documentation URL](https://your-documentation-url).

## Getting Started

To get started with the URL shortener platform, follow these steps:

1. Clone this repository to your local machine.
2. Install the necessary dependencies using `npm install`.
3. Configure the platform according to your requirements.
4. Run the platform using `npm start`.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.


<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/ProfessorBlackman/mini_frontend.svg?style=for-the-badge
[contributors-url]: https://github.com/ProfessorBlackman/mini_frontend/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/ProfessorBlackman/mini_frontend.svg?style=for-the-badge
[forks-url]: https://github.com/ProfessorBlackman/mini_frontend/network/members
[stars-shield]: https://img.shields.io/github/stars/ProfessorBlackman/mini_frontend.svg?style=for-the-badge
[stars-url]: https://github.com/ProfessorBlackman/mini_frontend/stargazers
[issues-shield]: https://img.shields.io/github/issues/ProfessorBlackman/mini_frontend.svg?style=for-the-badge
[issues-url]: https://github.com/ProfessorBlackman/mini_frontend/issues
[license-shield]: https://img.shields.io/github/license/ProfessorBlackman/mini_frontend.svg?style=for-the-badge
[license-url]: https://github.com/ProfessorBlackman/mini_frontend/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/methuselahnwodobeh
