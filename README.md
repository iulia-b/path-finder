# PathFinder - Career Guidance Website

Site pentru orientare profesională și guidance pentru elevi (Professional orientation and guidance site for students)

## 🌟 Overview

PathFinder is a static website designed to provide comprehensive career guidance and professional orientation for students. The site helps students discover their potential, plan their educational pathways, and connect with experienced mentors.

## 📁 Website Structure

```
pathfinder/
├── index.html          # Homepage with hero section and key features
├── about.html          # About page - mission, story, and what we do
├── services.html       # Detailed service offerings
├── mentors.html        # Mentor profiles and how mentorship works
├── contact.html        # Contact form and information
└── assets/
    └── images/         # Directory for website images
```

## 🚀 Features

- **Responsive Design**: Built with Tailwind CSS for mobile-first responsive design
- **Professional Layout**: Clean, modern design with consistent navigation
- **Service Showcase**: Detailed information about career guidance services
- **Mentor Profiles**: Showcase of professional mentors from various fields
- **Contact Form**: Interactive contact form for inquiries
- **GitHub Pages Ready**: Automated deployment workflow included

## 🎨 Technology Stack

- **HTML5**: Semantic markup for accessibility and SEO
- **Tailwind CSS**: Utility-first CSS framework (via CDN)
- **GitHub Pages**: Static site hosting and deployment
- **GitHub Actions**: Automated deployment workflow

## 🚀 Deployment

The website is configured for automatic deployment to GitHub Pages:

1. **Automatic Deployment**: Every push to the `main` branch triggers deployment
2. **Manual Deployment**: Can be triggered manually from GitHub Actions tab
3. **GitHub Pages URL**: Will be available at `https://[username].github.io/path-finder`

### Setting up GitHub Pages:

1. Go to repository Settings → Pages
2. Select "Deploy from a branch" 
3. Choose "GitHub Actions" as the source
4. The deployment workflow is already configured in `.github/workflows/deploy.yml`

## 🛠️ Local Development

To run the website locally:

```bash
# Clone the repository
git clone https://github.com/iulia-b/path-finder.git
cd path-finder

# Start a local server (Python 3)
python3 -m http.server 8000

# Or use Node.js
npx serve .

# Visit http://localhost:8000
```

## 📝 Content Sections

### Homepage (`index.html`)
- Hero section with call-to-action
- Key features and benefits
- Professional overview

### About (`about.html`) 
- Mission statement
- Service overview cards
- Company story and values

### Services (`services.html`)
- Career Assessment
- Educational Planning  
- One-on-One Mentoring
- Workshops & Resources

### Mentors (`mentors.html`)
- Sample mentor profiles
- Expertise areas and backgrounds
- How mentorship process works

### Contact (`contact.html`)
- Contact form for inquiries
- Contact information and office hours
- Social media links

## 🎯 Target Audience

- **Students**: High school and university students seeking career guidance
- **Parents**: Looking for professional guidance resources for their children
- **Educators**: Seeking career orientation resources and partnerships

## 📱 Responsive Design

The website is fully responsive and optimized for:
- 📱 Mobile devices
- 💻 Tablets  
- 🖥️ Desktop computers

## 🔧 Customization

### Adding Images
Place images in the `assets/images/` directory and update HTML references.

### Updating Content
Edit the respective HTML files to update content, services, or mentor information.

### Styling Changes
The site uses Tailwind CSS via CDN. For extensive customization, consider setting up a local Tailwind build process.

## 📧 Contact

For questions about the website or services:
- Email: contact@pathfinder.ro
- Phone: +40 123 456 789

---

© 2024 PathFinder. All rights reserved. | Helping students find their path to success
