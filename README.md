# Theia - (Hiperion's extension)

## Overview

Theia is a web application built with Next.js 13 that serves as an extension to the [Hiperion-Bot](https://github.com/angelopedroso/Hiperion-Bot), enabling additional functionalities and a user-friendly dashboard for managing WhatsApp groups. The application facilitates group administration, including banning participants, updating group names and photos, and adjusting bot settings within the groups. It also provides a dashboard with insights into group administrators, the bot's active groups, and a graph displaying command usage per group. The chart utilizes Recharts, a charting library for React.

![Theia dashboard](https://i.ibb.co/xhcMxF2/image.png "Theia dashboard")

### Requirements

To use Theia, ensure you have the following prerequisites installed:

- Node.js 18 or higher
- Running instance of [Hiperion-Bot](https://github.com/angelopedroso/Hiperion-Bot)

### Configuration

1. Clone this repository to your local environment.
2. Install the required dependencies using Yarn:

   ```shell
   yarn install
   ```

3. Set the `API_HOST_URL` environment variable.

4. Run the [Hiperion-Bot](https://github.com/angelopedroso/Hiperion-Bot) as described in its README.md.

5. Start the Theia application using the following command:

   ```shell
   yarn dev
   ```

### Dependencies

The Theia application has the following main dependencies:

- Next.js 13
- Tailwind CSS
- React Hook Form
- Shadcn (Re-usable components built using Radix UI and Tailwind CSS)
- Recharts

### Features

The Theia application extends the capabilities of the [Hiperion-Bot](https://github.com/angelopedroso/Hiperion-Bot) with the following features:

- Ban one or multiple participants from a group
- Update group name and photo
- Adjust bot settings within groups
- Dashboard displaying:
  - Group administrators
  - Active groups with the bot
  - Graph showing command usage per group

### Contribution

We welcome contributions to improve and enhance Theia. To contribute, please follow these steps:

1. Fork this repository.
2. Create a branch for your contribution: `git checkout -b your-branch`.
3. Implement the desired changes and include relevant documentation.
4. Commit your changes: `git commit -m "Your message"`.
5. Push your changes: `git push origin your-branch`.
6. Open a pull request in this repository.

We appreciate your contributions in advance!

### License

The Theia application is licensed under the Apache 2.0 License. For more details, please see the [LICENSE](./LICENSE) file.

---

Thank you for using Theia, the WhatsApp Bot Extension for [Hiperion-Bot](https://github.com/angelopedroso/Hiperion-Bot)! If you encounter any issues or have questions, please feel free to reach out.
