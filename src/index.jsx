import React from "react";
import { createRoot } from 'react-dom/client';
import ContactApp from "./ContactApp";

//TODO
const root = createRoot(document.getElementById('root'));
root.render(<ContactApp />);