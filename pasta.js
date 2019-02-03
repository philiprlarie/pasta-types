const pastas = [
  {
    "name": "Acini Di Pepe",
    "image": "https://pastafits.org/wp-content/uploads/2018/08/npa_ACINI_DI_PEPE_H_CORRECTED.jpg",
    "description": "Acini di pepe – an extremely small, round pasta shape – translates to peppercorn, or seeds of pepper.",
    "href": "https://pastafits.org/pasta-shapes/acini-di-pepe/"
  },
  {
    "name": "Alphabet Pasta",
    "image": "https://pastafits.org/wp-content/uploads/2018/08/npa_ALPHABET_PASTA_H_CORRECTED.jpg",
    "description": "Alphabet pasta is traditional pasta that has been cut into letters of the alphabet. It includes letters from A to Z, sometimes adding numbers...",
    "href": "https://pastafits.org/pasta-shapes/alphabet-pasta/"
  },
  {
    "name": "Anelli",
    "image": "https://pastafits.org/wp-content/uploads/2018/08/npa_ANELLI_H.jpg",
    "description": "Anelli pasta are thin dry ring shaped pasta often used by Italians in soups, salads and oven baked pasta dishes.",
    "href": "https://pastafits.org/pasta-shapes/anelli/"
  },
  {
    "name": "Angel Hair",
    "image": "https://pastafits.org/wp-content/uploads/2018/08/npa_ANGEL_HAIR_H.jpg",
    "description": "Angel hair pasta is a long, thin noodle with a round shape. Although it resembles spaghetti, another long and thin pasta, angel hair is...",
    "href": "https://pastafits.org/pasta-shapes/angel-hair/"
  },
  {
    "name": "Bucatini",
    "image": "https://pastafits.org/wp-content/uploads/2018/08/npa_BUCATINI_H.jpg",
    "description": "This straw-like pasta is shaped like thick Spaghetti but is hollow in the center.",
    "href": "https://pastafits.org/pasta-shapes/bucatini/"
  },
  {
    "name": "Calamarata",
    "image": "https://pastafits.org/wp-content/uploads/2018/08/npa_CALAMARATA_H.jpg",
    "description": "Does this pasta’s name sound familiar? This tube shaped pasta resembles calamari rings, which is why it tends to be used in seafood dishes....",
    "href": "https://pastafits.org/pasta-shapes/calamarata/"
  },
  {
    "name": "Campanelle",
    "image": "https://pastafits.org/wp-content/uploads/2018/08/npa_CHAMPANELLE_H.jpg",
    "description": "Campanelle pasta resembles a small cone with a ruffled edge. It is also known as Gigli pasta and looks like a bell.",
    "href": "https://pastafits.org/pasta-shapes/campanelle/"
  },
  {
    "name": "Casarecce",
    "image": "https://pastafits.org/wp-content/uploads/2018/08/npa_CASARECCE_H.jpg",
    "description": "Casarecce pasta is shaped like a narrow, twisted and rolled tube.",
    "href": "https://pastafits.org/pasta-shapes/casarecce/"
  },
  {
    "name": "Cavatappi",
    "image": "https://pastafits.org/wp-content/uploads/2018/08/npa_CAVATAPPI_H_CORRECTED.jpg",
    "description": "Cavatappi is macaroni formed in a helical tube shape. Cavatappi is the Italian word for corkscrew.",
    "href": "https://pastafits.org/pasta-shapes/cavatappi/"
  },
  {
    "name": "Cavatelli",
    "image": "https://pastafits.org/wp-content/uploads/2018/08/npa_CAVATELLI_H_CORRECTED.jpg",
    "description": "Cavatelli resembles a tiny hot dog bun.",
    "href": "https://pastafits.org/pasta-shapes/cavatelli/"
  },
  {
    "name": "Conchiglie - Jumbo",
    "image": "https://pastafits.org/wp-content/uploads/2018/08/npa_CONCHIGLIE_JUMBO_H.jpg",
    "description": "Commonly known as \"shells\" or \"seashells.\" These are usually sold in the plain durum wheat variety, and also in colored varieties.",
    "href": "https://pastafits.org/pasta-shapes/conchiglie-jumbo/"
  },
  {
    "name": "Conchiglie - Medium",
    "image": "https://pastafits.org/wp-content/uploads/2018/08/npa_CONCHIGLIE_MEDIUM_H.jpg",
    "description": "Commonly known as \"shells\" or \"seashells.\" These are usually sold in the plain durum wheat variety, and also in colored varieties.",
    "href": "https://pastafits.org/pasta-shapes/conchiglie-medium/"
  },
  {
    "name": "Conchiglie - Mini",
    "image": "https://pastafits.org/wp-content/uploads/2018/08/npa_CONCHIGLIE_MINI_H.jpg",
    "description": "Commonly known as \"shells\" or \"seashells.\" These are usually sold in the plain durum wheat variety, and also in colored varieties.",
    "href": "https://pastafits.org/pasta-shapes/conchiglie-mini/"
  },
  {
    "name": "Conchiglie - Small",
    "image": "https://pastafits.org/wp-content/uploads/2018/08/npa_CONCHIGLIE_SMALL_V_CORRECTED.jpg",
    "description": "Commonly known as \"shells\" or \"seashells.\" These are usually sold in the plain durum wheat variety, and also in colored varieties.",
    "href": "https://pastafits.org/pasta-shapes/conchiglie-small/"
  },
  {
    "name": "Corbata",
    "image": "https://pastafits.org/wp-content/uploads/2018/08/npa_CORBATA_H.jpg",
    "description": "Corbata is the smallest version of farfalle, following farfalline. The tiniest bow-tie of them all, corbata has a baby butterfly shape that makes it...",
    "href": "https://pastafits.org/pasta-shapes/corbata/"
  },
  {
    "name": "Ditalini",
    "image": "https://pastafits.org/wp-content/uploads/2018/08/npa_DITALINI_H.jpg",
    "description": "Ditalini, is a very small type of pasta that is shaped like tubes, which is the English translation of its name.",
    "href": "https://pastafits.org/pasta-shapes/ditalini/"
  },
  {
    "name": "Egg Noodle (Medium and Wide)",
    "image": "https://pastafits.org/wp-content/uploads/2018/08/npa_EGG_NOODLE_H.jpg",
    "description": "In German, the word “nudel” means pasta with egg.  These noodles have a larger amount of egg as an ingredient along with the...",
    "href": "https://pastafits.org/pasta-shapes/egg-noodle/"
  },
  {
    "name": "Elbow Macaroni",
    "image": "https://pastafits.org/wp-content/uploads/2018/08/npa_ELBOW_MACARONI_H.jpg",
    "description": "Elbow macaroni has a short, curved shape.",
    "href": "https://pastafits.org/pasta-shapes/elbow-macaroni/"
  },
  {
    "name": "Farfalle (Bow Ties)",
    "image": "https://pastafits.org/wp-content/uploads/2018/08/npa_FARFALLE_H.jpg",
    "description": "Farfalle is a type of short pasta typically known as bow tie pasta because of its unique shape.",
    "href": "https://pastafits.org/pasta-shapes/farfalle/"
  },
  {
    "name": "Farfalline",
    "image": "https://pastafits.org/wp-content/uploads/2018/08/npa_FARFALLINE_H.jpg",
    "description": "Farfalline is a small, rounded version of the traditional bow tie or butterfly shaped pasta known as farfalle.",
    "href": "https://pastafits.org/pasta-shapes/farfalline/"
  },
  {
    "name": "Fettuccine",
    "image": "https://pastafits.org/wp-content/uploads/2018/08/npa_FETTUCCINE_H.jpg",
    "description": "It is a long, flat pasta on the thicker side.",
    "href": "https://pastafits.org/pasta-shapes/fettuccine/"
  },
  {
    "name": "Fideo",
    "image": "https://pastafits.org/wp-content/uploads/2018/08/npa_FIDEO_H.jpg",
    "description": "Short and thin strands of pasta that are slightly curved.",
    "href": "https://pastafits.org/pasta-shapes/fideo/"
  },
  {
    "name": "Fusilli",
    "image": "https://pastafits.org/wp-content/uploads/2018/08/npa_FUSILLI_H_CORRECTED.jpg",
    "description": "A short pasta shape with a twisted, spiralized form.",
    "href": "https://pastafits.org/pasta-shapes/fusilli/"
  },
  {
    "name": "Gemelli",
    "image": "https://pastafits.org/wp-content/uploads/2018/08/npa_GEMELLI_H.jpg",
    "description": "Gemelli is a short, twisted pasta shape. The word gemelli means twins, and the shape has also been described as unicorn horns.",
    "href": "https://pastafits.org/pasta-shapes/gemelli/"
  },
  {
    "name": "Gigli",
    "image": "https://pastafits.org/wp-content/uploads/2018/08/npa_GILGI_H.jpg",
    "description": "Gigli is a delicate piece of pasta that has been rolled into a cone or flower.",
    "href": "https://pastafits.org/pasta-shapes/gilgi/"
  },
  {
    "name": "Gnocchi",
    "image": "https://pastafits.org/wp-content/uploads/2018/08/npa_GNOCCHI_H_CORRECTED.jpg",
    "description": "Gnocchi are thick, small, oval-like shapes of dough typically made of potatoes, eggs, cheese and flour. The dough for gnocchi is rolled out into...",
    "href": "https://pastafits.org/pasta-shapes/gnocchi/"
  },
  {
    "name": "Lasagna",
    "image": "https://pastafits.org/wp-content/uploads/2018/08/npa_LASAGNA_H_CORRECTED.jpg",
    "description": "They are a wide, flat sheets of pasta sheets.",
    "href": "https://pastafits.org/pasta-shapes/lasagna/"
  },
  {
    "name": "Linguine",
    "image": "https://pastafits.org/wp-content/uploads/2018/08/npa_LINGUINE_H.jpg",
    "description": "The word means “little tongues” and the pasta shape is similar to fettuccine, though is much narrower.",
    "href": "https://pastafits.org/pasta-shapes/linguine/"
  },
  {
    "name": "Mafalda",
    "image": "https://pastafits.org/wp-content/uploads/2018/08/npa_MAFALDA_H.jpg",
    "description": "Typically known as mafaldine, this is a type of pasta has a ribbon shape, similar to lasagna but more narrow.",
    "href": "https://pastafits.org/pasta-shapes/mafalda/"
  },
  {
    "name": "Manicotti",
    "image": "https://pastafits.org/wp-content/uploads/2018/08/manicotti.jpg",
    "description": "They are very large tube-shaped pasta, usually ridged, that usually stuffed and baked.",
    "href": "https://pastafits.org/pasta-shapes/manicotti/"
  },
  {
    "name": "Mezza Luna",
    "image": "https://pastafits.org/wp-content/uploads/2018/08/npa_MEZZALUNA_H_CORRECTED.jpg",
    "description": "Mezze luna is a stuffed, half-moon shaped pasta with sealed, curved edges, very similar to a ravioli. Mezza luna can have any kind of...",
    "href": "https://pastafits.org/pasta-shapes/mezza-luna/"
  },
  {
    "name": "Orecchiette",
    "image": "https://pastafits.org/wp-content/uploads/2018/08/npa_ORECCHICTTE_H.jpg",
    "description": "These are small pasta shapes that are shaped like a small ear, which is where their name comes from.",
    "href": "https://pastafits.org/pasta-shapes/orecchiette/"
  },
  {
    "name": "Orzo",
    "image": "https://pastafits.org/wp-content/uploads/2018/08/npa_ORZO_H.jpg",
    "description": "It is a form of short-cut pasta, shaped like a large grain of rice.",
    "href": "https://pastafits.org/pasta-shapes/orzo/"
  },
  {
    "name": "Pappardelle",
    "image": "https://pastafits.org/wp-content/uploads/2018/08/npa_PAPPERDELLE_H_CORRECTED.jpg",
    "description": "Pappardelle is a flat, long ribbon shaped pasta. It is wider than tagliatelle but not quite as wide as lasagna. The name pappardelle comes...",
    "href": "https://pastafits.org/pasta-shapes/pappardelle/"
  },
  {
    "name": "Pastina",
    "image": "https://pastafits.org/wp-content/uploads/2018/08/npa_PASTINA_H_CORRECTED.jpg",
    "description": "Pastina is one of the smallest pasta shapes available and is the pasta that many Italian children, and children from all over the world,...",
    "href": "https://pastafits.org/pasta-shapes/pastina/"
  },
  {
    "name": "Penne",
    "image": "https://pastafits.org/wp-content/uploads/2018/08/npa_PENNE_H_CORRECTED.jpg",
    "description": "Penne is one of the most famous Italian pasta shapes and is loved across Italy and the world. Penne translates to the word “pen”,...",
    "href": "https://pastafits.org/pasta-shapes/penne/"
  },
  {
    "name": "Penne - Mostaccioli",
    "image": "https://pastafits.org/wp-content/uploads/2018/08/npa_PENNE_MASTACCIOLI_H.jpg",
    "description": "Penne mostaccioli or “small mustaches” has the exact same shape as penne pasta, however it does not have a ridged surface. Like penne, it...",
    "href": "https://pastafits.org/pasta-shapes/penne-mostaccioli/"
  },
  {
    "name": "Penne - Rigate",
    "image": "https://pastafits.org/wp-content/uploads/2018/08/npa_PENNE_RAGATE_H.jpg",
    "description": "Penne Rigate are ridged and ideal to lock-in flavor.",
    "href": "https://pastafits.org/pasta-shapes/penne-rigate/"
  },
  {
    "name": "Pipe - Rigate",
    "image": "https://pastafits.org/wp-content/uploads/2018/08/npa_PIPE_RAGATE_H_CORRECTED.jpg",
    "description": "Pipe rigate is a hollow curved pasta that looks similar to a snail shell. It has a wide opening at one end and the...",
    "href": "https://pastafits.org/pasta-shapes/pipe-rigate/"
  },
  {
    "name": "Pipette - Rigate",
    "image": "https://pastafits.org/wp-content/uploads/2018/08/npa_PIPETTE_RAGATE_H.jpg",
    "description": "This shape is a smaller version of Pipe Rigate.",
    "href": "https://pastafits.org/pasta-shapes/pipette-rigate/"
  },
  {
    "name": "Radiatori",
    "image": "https://pastafits.org/wp-content/uploads/2018/08/npa_RADIATORS_H_CORRECTED.jpg",
    "description": "Radiatori are short, squat pasta shapes with ruffled edges that resemble radiators. Many believe the shape was based on the design of a radiator...",
    "href": "https://pastafits.org/pasta-shapes/radiatori/"
  },
  {
    "name": "Ravioli",
    "image": "https://pastafits.org/wp-content/uploads/2018/08/npa_RAVIOLI_H_CORRECTED.jpg",
    "description": "Raviolis are square or round pillow shaped stuffed pastas, similar to dumplings. They have a filling that can consist of cheese, meat, and/or vegetables....",
    "href": "https://pastafits.org/pasta-shapes/ravioli/"
  },
  {
    "name": "Rigatoni",
    "image": "https://pastafits.org/wp-content/uploads/2018/08/npa_RIGATONI_H_CORRECTED.jpg",
    "description": "Rigatoni are a form of tube-shaped pasta of varying lengths and diameters.",
    "href": "https://pastafits.org/pasta-shapes/rigatoni/"
  },
  {
    "name": "Rotelle",
    "image": "https://pastafits.org/wp-content/uploads/2018/08/npa_ROTELLE_H.jpg",
    "description": "Rotelle is a wheel shaped pasta that is also very similar to ruote pasta. It is used to add a decorative touch to soups,...",
    "href": "https://pastafits.org/pasta-shapes/rotelle/"
  },
  {
    "name": "Rotini",
    "image": "https://pastafits.org/wp-content/uploads/2018/08/npa_ROTINI_H.jpg",
    "description": "Rotini are short, corkscrew-like shaped pasta. The name translates from Italian to “small wheels” and the shape originated in Southern Italy. It is a...",
    "href": "https://pastafits.org/pasta-shapes/rotini/"
  },
  {
    "name": "Ruote",
    "image": "https://pastafits.org/wp-content/uploads/2018/08/npa_RUOTE_H.jpg",
    "description": "Ruote pasta is shaped to resemble wagon wheels.",
    "href": "https://pastafits.org/pasta-shapes/ruote/"
  },
  {
    "name": "Spaghetti",
    "image": "https://pastafits.org/wp-content/uploads/2018/08/npa_SPAGHETTI_H.jpg",
    "description": "Spaghetti (“a length of cord”) may just be the best known pasta shape. A long, thin piece of pasta, spaghetti has a lot of...",
    "href": "https://pastafits.org/pasta-shapes/spaghetti/"
  },
  {
    "name": "Tagliatelle",
    "image": "https://pastafits.org/wp-content/uploads/2018/08/npa_TAGLIATELLE_H_CORRECTED.jpg",
    "description": "Tagliatelle is a long, ribbon shaped pasta that is similar to fettuccine. The pasta is largely known for its romantic origins. Even though the...",
    "href": "https://pastafits.org/pasta-shapes/tagliatelle/"
  },
  {
    "name": "Thin Spaghetti",
    "image": "https://pastafits.org/wp-content/uploads/2018/08/npa_THIN_SPAGHETTI_H.jpg",
    "description": "Thin spaghetti is virtually the same as spaghetti, just thinner. It is very similar to vermicelli. It can be used in place of spaghetti...",
    "href": "https://pastafits.org/pasta-shapes/thin-spaghetti/"
  },
  {
    "name": "Tortellini",
    "image": "https://pastafits.org/wp-content/uploads/2018/08/npa_TORTELLINI_H_CORRECTED.jpg",
    "description": "Tortellini is a ring shaped stuffed pasta that is typically filled with meat, cheese or vegetables. Tortelloni is a larger version of Tortellini. It...",
    "href": "https://pastafits.org/pasta-shapes/tortellini/"
  },
  {
    "name": "Tripoline",
    "image": "https://pastafits.org/wp-content/uploads/2018/08/npa_TRIPOLINI_H_CORRECTED.jpg",
    "description": "Tripoline pasta is a long pasta ribbon with ruffles on one side. It is very similar to mafalda - the main difference being ruffles...",
    "href": "https://pastafits.org/pasta-shapes/tripolini/"
  },
  {
    "name": "Trofie",
    "image": "https://pastafits.org/wp-content/uploads/2018/08/npa_TROFIE_H_CORRECTED.jpg",
    "description": "Trofie is a short, thin twisted pasta shape, about an inch in length. This shape is thick in the middle and has pointed ends....",
    "href": "https://pastafits.org/pasta-shapes/trofie/"
  },
  {
    "name": "Tubini",
    "image": "https://pastafits.org/wp-content/uploads/2018/08/npa_TUBINI_H_CORRECTED.jpg",
    "description": "Tubini is a medium size, narrow tube shaped pasta. It is not as wide as some other tube pastas like rigatoni and tortiglioni. Because...",
    "href": "https://pastafits.org/pasta-shapes/tubini/"
  },
  {
    "name": "Vermicelli",
    "image": "https://pastafits.org/wp-content/uploads/2018/08/npa_VERMICELLI_H.jpg",
    "description": "It is a traditional type of pasta that is slightly thinner than Spaghetti.",
    "href": "https://pastafits.org/pasta-shapes/vermicelli/"
  },
  {
    "name": "Ziti",
    "image": "https://pastafits.org/wp-content/uploads/2018/08/npa_ZITI_H_CORRECTED.jpg",
    "description": "It has a medium-sized, tubular shape. It’s a type of penne pasta in the form of long smooth hollow tubes.",
    "href": "https://pastafits.org/pasta-shapes/ziti/"
  }
];

let curPasta = pastas[Math.floor(Math.random() * pastas.length)];
curPasta = pastas[Math.floor(Math.random() * pastas.length)];
$('.picture img').attr('src', curPasta.image);
$('.name h1').text("");
$('.name a').attr('href', "");
$('.name p').text("");

function step() {
  if ($('.name h1').text()) {
    curPasta = pastas[Math.floor(Math.random() * pastas.length)];
    $('.picture img').attr('src', curPasta.image);
    $('.name h1').text("");
    $('.name a').attr('href', "");
    $('.name p').text("");
  } else {
    $('.name h1').text(curPasta.name);
    $('.name a').attr('href', curPasta.href);
    $('.name p').text(curPasta.description);
  }
}

$('.picture').click(step);
