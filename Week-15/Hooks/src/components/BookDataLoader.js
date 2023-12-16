import { useEffect } from "react";

const BookDataLoader = ({ setBooksState }) => {
  useEffect(() => {
    const books = [
      {
        title:
          "The Coming Wave: the ground-breaking book from the ultimate AI insider",
        author: "Mustafa Suleyman, Michael Bhaskar",
        year: 2023,
        desc:
          "A stark and urgent warning on the unprecedented risks that a wave of fast-developing technologies poses to global order, and how we might contain them while we have the chance-from a cofounder of the pioneering AI company DeepMind"
      },
      {
        title: "Heat and Mass Transfer Data Book",
        author: "C.P. Kothandaraman",
        year: 2022,
        desc:
          "Heat and Mass Transfer Data Book is authored by eminent authors Prof. C P Kothandaraman and Dr. S Subramanyan and is published by one of the leading publishers, NEW AGE International Publishers. This latest Multicolour Edition of the book is intended for the undergraduate and postgraduate students and teachers of mechanical and chemical engineering as well as practicing engineers. The book is recommended by various IITs, NITs and other top Engineering Colleges. This is one of our bestselling Data Book on Heat and Mass Transfer. • The book provides relevant property data in easily readable alphabetical form at different temperatures for: 1. Metals and alloys, liquids and gases of engineering interest 2. Building and insulating materials 3. Pure elements. • Heat transfer correlations in easily readable form with notations side by side for: 1. Conduction both steady and unsteady state 2. Both forced and natural convection under various flow configurations 3. Radiation for various geometrical configurations. 4. Radiation data for surfaces and solar radiation 5. Heat exchangers of various configurations including storage type and fined type. • Mass transfer data for various combinations of diffusing elements. • Property data for several heat pipe materials at various temperatures. • Transport property data for steam at various temperatures and pressures. • Transport property data for four common refrigerants at various temperatures. • Property values of some newer materials like food materials and storage battery materials. • Provision of charts when the equations involved are long and complex. • Multicolour edition enhances clarity and readability."
      },
      {
        title: "Knowledge Encyclopedia Space",
        author: "Wonder House Books",
        year: 2022,
        desc:
          "Ever looked at the sky and wondered what all is out there in the universe? How did the solar system come into being? What are constellations? How did we reach the Moon? This encyclopedia on space will answer these and more hows and whys for you. Learning is made simpler with well-labelled diagrams and an extensive glossary of difficult words. Bonus: the engrossing book comes loaded with Isn’ t It Amazing— a section of fun facts to keep you glued for more. This encyclopedia is a must-read for all children! • It is well-researched and has child-friendly content • The various topics improve knowledge about the world around us and beyond • The content will cater to curious minds and expand their horizon • The book comprises a glossary of new and difficult terms • It is an excellent selection for gifting and school libraries"
      }
    ];
    setBooksState(books);
  }, []);
};

export default BookDataLoader;
