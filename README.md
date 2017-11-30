# Panono

[Live application here](http://panono-demo.s3-website-eu-west-1.amazonaws.com), hosted on [AWS S3](https://aws.amazon.com/es/s3).

### Features

- HTTP client that uses an API of [Panono](https://www.panono.com) to retrieve a list of Panoramas (images) with pagination.
- Panoramas are shown using either a grid or list view.
- Each panorama contains an image, a title, a date of publishing and an icon that is filled or not depending on whether the panorama has been marked as favorite. The image is hidden when the list view is active.
- Mark panoramas as favorites by clicking the favorite icon (heart). This data is stored locally using Web Storage. 
- Navigation through pages.
- Sidebar to choose the view layout and filter the list to see only the favorite panoramas.
- Filtering is done per page, so it shows the favorite panoramas only in the current page.
- Collapsible sidebar. A burger button appears in the toolbar when the sidebar is hidden.
- Responsive design.

## Setup

Run `npm install`.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.
