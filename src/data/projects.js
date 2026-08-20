export const projects = [
{
slug: "quickride",
title: "QuickRide",
description:
"A full-stack vehicle rental platform built with React and FastAPI, supporting user authentication, vehicle discovery, availability, booking workflows, and vehicle management.",
image: "/projects/quickridev2.png",
tech: [
"React",
"Tailwind CSS",
"FastAPI",
"Python",
"SQLAlchemy",
"JWT",
"MySQL"
],
features: [
"JWT-based user authentication",
"Vehicle search and filtering",
"Vehicle availability management",
"Booking and rental workflow",
"Role-based functionality",
"Vehicle management dashboard",
"Responsive interface"
],
architecture: [
"React frontend communicating with FastAPI REST APIs",
"SQLAlchemy ORM with MySQL database",
"JWT-based authentication and protected routes",
"Component-based frontend architecture",
"Git-based development and deployment workflow"
],
challenges:
"Managing authentication, vehicle availability, and booking state while keeping the interface responsive and easy to navigate.",
github: "https://github.com/harshitabisht05/quickride.git",
live: "https://quickride-six.vercel.app/",
metrics: [
"Full-Stack Application",
"REST API Integration",
"Authentication",
"Booking Workflow",
"Responsive UI"
]
},

{
slug: "voice-agent",
title: "Voice Agent MVP",
description:
"A browser-based voice assistant using the Web Speech API for speech recognition, voice responses, and real-time command interaction.",
image: "/projects/voiceagent.png",
tech: [
"JavaScript",
"Web Speech API"
],
features: [
"Speech-to-text recognition",
"Text-to-speech responses",
"Voice command matching",
"Real-time interaction states",
"Browser-based voice controls"
],
architecture: [
"Client-side browser architecture",
"Native Web Speech API integration",
"Event-driven speech recognition flow",
"Client-side command processing"
],
challenges:
"Handling browser differences in speech recognition and providing clear UI feedback during listening, processing, and response states.",
github: "https://github.com/harshitabisht05/voice-agent-mvp.git",
live: "https://harshitabisht05.github.io/voice-agent-mvp/",
metrics: [
"Voice Interaction",
"Browser APIs",
"Real-Time UI",
"Interactive Experience"
]
},

{
slug: "portfolio",
title: "Personal Portfolio",
description:
"A responsive developer portfolio built with React, Tailwind CSS, and Framer Motion to showcase projects, experience, and interactive web development work.",
image: "/projects/portfolio.png",
tech: [
"React",
"Vite",
"Tailwind CSS",
"Framer Motion"
],
features: [
"Responsive UI layouts",
"Dynamic project routing",
"Animated section reveals",
"Scroll progress indicator",
"Keyboard command palette",
"Interactive page transitions"
],
architecture: [
"React component-based architecture",
"Reusable UI components",
"React Router project pages",
"Responsive mobile-first layouts",
"Framer Motion animations and transitions"
],
challenges:
"Creating a visually engaging portfolio while keeping navigation, responsiveness, animations, and content structure consistent across screen sizes.",
github: "https://github.com/harshitabisht05/portfolio.git",
live: "https://portfolio-gray-one-76.vercel.app/",
metrics: [
"Responsive UI",
"Component Architecture",
"Interactive Motion",
"Dynamic Routing"
]
}
];
