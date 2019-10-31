const moviesMock = [
  {
    id: '42189a8d-bb02-4017-b096-c564d1d7cd8c',
    title: 'Before the Fall (NaPolA - Elite für den Führer)',
    year: 1993,
    cover: 'http://dummyimage.com/153x105.jpg/cc0000/ffffff',
    description:
      'Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.\n\nMauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.',
    duration: 1891,
    contentRating: 'PG',
    source:
      'http://yale.edu/ridiculus/mus/vivamus/vestibulum/sagittis/sapien/cum.json',
    tags: ['Horror|Mystery|Thriller', 'Action|Adventure|Comedy|Drama|War']
  },
  {
    id: 'a5a13ddc-8dff-4da2-be82-5be0da969587',
    title: 'Unholy Rollers, The',
    year: 2006,
    cover: 'http://dummyimage.com/189x151.jpg/dddddd/000000',
    description:
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.',
    duration: 1952,
    contentRating: 'NC-17',
    source: 'http://domainmarket.com/ipsum/dolor/sit/amet.json',
    tags: ['Adventure|Children|Drama|Fantasy|Mystery', 'Children|Comedy']
  },
  {
    id: 'a14819d6-45a5-4cf8-99b8-fed01253da7d',
    title: 'Cremaster 5',
    year: 1997,
    cover: 'http://dummyimage.com/241x236.png/cc0000/ffffff',
    description:
      'Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.\n\nNullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.\n\nIn quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.',
    duration: 1976,
    contentRating: 'G',
    source: 'https://businessweek.com/rutrum/ac/lobortis/vel/dapibus.jpg',
    tags: [
      'Drama|Sci-Fi|War',
      'Fantasy|Romance',
      'Comedy|Musical|Romance',
      'Fantasy'
    ]
  },
  {
    id: '74237a70-85fc-48b5-badf-ef1042445455',
    title: 'Song of Bernadette, The',
    year: 1995,
    cover: 'http://dummyimage.com/239x171.bmp/cc0000/ffffff',
    description:
      'In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.\n\nSuspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.',
    duration: 1982,
    contentRating: 'PG',
    source:
      'http://cafepress.com/eros/elementum/pellentesque/quisque/porta.json',
    tags: ['Action|Drama']
  },
  {
    id: '56bdb815-9a35-4b46-836f-b2b66939bf9a',
    title: 'Nico Icon',
    year: 2004,
    cover: 'http://dummyimage.com/198x147.bmp/cc0000/ffffff',
    description:
      'In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.',
    duration: 2017,
    contentRating: 'PG-13',
    source: 'https://google.com/nulla/nisl/nunc/nisl/duis/bibendum.xml',
    tags: ['Drama|Mystery|Sci-Fi']
  },
  {
    id: '1274fa15-c70f-4d8c-a3ac-db907a413aa1',
    title: 'Get on Up',
    year: 2002,
    cover: 'http://dummyimage.com/166x228.png/5fa2dd/ffffff',
    description:
      'Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.\n\nFusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.',
    duration: 1984,
    contentRating: 'R',
    source: 'http://about.me/volutpat/erat/quisque.html',
    tags: ['(no genres listed)']
  },
  {
    id: '5b917607-d805-41ed-b5e8-0300fcf828dd',
    title: 'Waiting...',
    year: 2011,
    cover: 'http://dummyimage.com/177x181.bmp/dddddd/000000',
    description:
      'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.\n\nCurabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.',
    duration: 1993,
    contentRating: 'PG-13',
    source: 'http://omniture.com/neque.html',
    tags: [
      'Horror',
      'Documentary',
      'Comedy',
      'Action|Sci-Fi|Thriller',
      'Comedy|Crime|Drama|Mystery|Romance'
    ]
  },
  {
    id: '0e56a83f-ae64-4fba-a703-7ba85c206801',
    title: 'Streetcar Named Desire, A',
    year: 2006,
    cover: 'http://dummyimage.com/208x104.bmp/dddddd/000000',
    description:
      'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.\n\nCurabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.',
    duration: 2016,
    contentRating: 'PG-13',
    source: 'https://pbs.org/id/luctus/nec/molestie.js',
    tags: [
      'Horror',
      'Drama',
      'Children|Comedy|Fantasy',
      'Drama',
      'Action|Crime|Drama'
    ]
  },
  {
    id: '8683eea3-ddeb-4e12-9cd8-8c484aa3dfa3',
    title:
      'Sergeant Körmy and the South Pacific (Vääpeli Körmy ja etelän hetelmät)',
    year: 2000,
    cover: 'http://dummyimage.com/114x144.jpg/cc0000/ffffff',
    description:
      'Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.\n\nMaecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.\n\nCurabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.',
    duration: 1961,
    contentRating: 'PG',
    source: 'http://tripod.com/convallis/morbi/odio.jpg',
    tags: ['Drama|Romance']
  },
  {
    id: '5688d14d-31c1-4bdf-afae-0d1e32b9dfd4',
    title: 'Spellbound',
    year: 1996,
    cover: 'http://dummyimage.com/104x110.bmp/ff4444/ffffff',
    description:
      'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.\n\nEtiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.',
    duration: 2019,
    contentRating: 'PG-13',
    source: 'http://goo.ne.jp/justo/in/blandit.json',
    tags: ['Action|Thriller', 'Children|Drama|Fantasy|Musical|Romance']
  },
  {
    id: 'f38c20ec-ff06-489b-af99-efbff07ad134',
    title: 'Costa Brava',
    year: 1988,
    cover: 'http://dummyimage.com/143x174.png/5fa2dd/ffffff',
    description:
      'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.\n\nDuis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.\n\nIn sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.',
    duration: 2043,
    contentRating: 'G',
    source: 'http://chicagotribune.com/erat/volutpat/in.aspx',
    tags: [
      'Comedy|Drama|War',
      'Fantasy|Horror|Thriller',
      'Documentary',
      'Drama'
    ]
  },
  {
    id: 'e400e06a-949d-470e-a959-ae51152c5648',
    title: "Zorn's Lemma",
    year: 1996,
    cover: 'http://dummyimage.com/207x109.jpg/5fa2dd/ffffff',
    description:
      'Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.\n\nCum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.\n\nEtiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.',
    duration: 1977,
    contentRating: 'R',
    source:
      'http://marketwatch.com/maecenas/pulvinar/lobortis/est/phasellus/sit.aspx',
    tags: ['Drama|Film-Noir', 'Action|Comedy|Crime']
  },
  {
    id: '8e9a34f3-ab5a-40cd-af15-5b79a7a59f09',
    title: 'Dragonfly',
    year: 2001,
    cover: 'http://dummyimage.com/178x161.bmp/cc0000/ffffff',
    description:
      'Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.\n\nSed ante. Vivamus tortor. Duis mattis egestas metus.',
    duration: 2023,
    contentRating: 'R',
    source: 'http://is.gd/elementum/pellentesque.js',
    tags: ['Comedy|Crime', 'Action|Adventure|Crime|Drama|Romance']
  },
  {
    id: '05056efa-c792-4ba0-b325-47f3bcccbac4',
    title: 'Fateless (Sorstalanság)',
    year: 1999,
    cover: 'http://dummyimage.com/236x145.bmp/dddddd/000000',
    description:
      'Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.',
    duration: 1998,
    contentRating: 'NC-17',
    source: 'http://pen.io/donec/ut/dolor.aspx',
    tags: [
      'Documentary',
      'Drama|Romance',
      'Adventure|Sci-Fi',
      'Horror|Thriller',
      'Drama|War'
    ]
  },
  {
    id: '4461e112-8840-47fe-9c6c-29816b61efc6',
    title: "When You Comin' Back, Red Ryder?",
    year: 1988,
    cover: 'http://dummyimage.com/132x156.png/ff4444/ffffff',
    description:
      'Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.\n\nSed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.',
    duration: 1995,
    contentRating: 'R',
    source: 'http://senate.gov/venenatis/turpis.js',
    tags: ['Documentary', 'Comedy|Drama|Romance']
  },
  {
    id: 'fe018054-97ac-484d-9247-abb582a300e0',
    title: 'Viking, The',
    year: 2005,
    cover: 'http://dummyimage.com/120x132.jpg/dddddd/000000',
    description:
      'Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.',
    duration: 1907,
    contentRating: 'PG',
    source: 'http://4shared.com/convallis/nunc/proin/at.json',
    tags: ['Drama']
  },
  {
    id: 'da1e768b-cb15-4a6e-a8f2-288bdfdd75c0',
    title: 'Temptress Moon (Feng Yue)',
    year: 2003,
    cover: 'http://dummyimage.com/187x201.jpg/dddddd/000000',
    description:
      'Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.\n\nIn quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.\n\nMaecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.',
    duration: 1971,
    contentRating: 'PG-13',
    source: 'https://loc.gov/elit.json',
    tags: ['Drama', 'Drama|Romance|Sci-Fi', 'Documentary', 'Documentary']
  },
  {
    id: '110a6474-e5d0-4adc-bf69-8f775ad663ed',
    title: "Ann Carver's Profession",
    year: 1993,
    cover: 'http://dummyimage.com/194x237.jpg/5fa2dd/ffffff',
    description:
      'Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.\n\nQuisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.\n\nVestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.',
    duration: 2053,
    contentRating: 'PG',
    source:
      'http://acquirethisname.com/maecenas/pulvinar/lobortis/est/phasellus/sit.js',
    tags: [
      'Action|Adventure|Thriller',
      'Drama|Romance',
      'Action|Mystery|Thriller'
    ]
  },
  {
    id: '28f5f838-8b70-4c4f-82a3-f0142f0326e3',
    title: 'Train',
    year: 1996,
    cover: 'http://dummyimage.com/228x178.jpg/5fa2dd/ffffff',
    description:
      'Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.\n\nPhasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.\n\nProin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.',
    duration: 2048,
    contentRating: 'G',
    source: 'http://lycos.com/nascetur/ridiculus/mus/vivamus/vestibulum.js',
    tags: [
      'Comedy|Drama|Romance',
      'Comedy',
      'Animation|Children',
      'Drama|Thriller',
      'Horror|Sci-Fi'
    ]
  },
  {
    id: 'c01c6d0e-5900-4684-8162-d993926900b8',
    title: 'Forever Hardcore: The Documentary',
    year: 2008,
    cover: 'http://dummyimage.com/201x194.bmp/ff4444/ffffff',
    description:
      'Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.\n\nMauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.\n\nNullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.',
    duration: 1928,
    contentRating: 'G',
    source: 'http://github.com/eget/elit.html',
    tags: ['Comedy', 'Documentary', 'Drama', 'Action|Comedy', 'Drama|War']
  },
  {
    id: '27189640-72ae-45cf-9766-64b453fa75bb',
    title: 'Severance',
    year: 1990,
    cover: 'http://dummyimage.com/155x103.png/dddddd/000000',
    description:
      'Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.',
    duration: 1966,
    contentRating: 'NC-17',
    source:
      'https://dailymail.co.uk/amet/sapien/dignissim/vestibulum/vestibulum/ante.js',
    tags: ['Comedy', 'Action|Adventure|Children|Comedy|Fantasy']
  },
  {
    id: 'e3c2806f-2207-43e3-92e6-d450481be5a6',
    title: "Coogan's Bluff",
    year: 2006,
    cover: 'http://dummyimage.com/164x222.jpg/cc0000/ffffff',
    description:
      'Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.\n\nPraesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.\n\nCras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
    duration: 2058,
    contentRating: 'NC-17',
    source: 'http://cbslocal.com/non/velit.json',
    tags: ['Children|Drama', '(no genres listed)']
  },
  {
    id: '19d87342-d39b-4979-9a40-fe24cd144417',
    title: 'Under the Age',
    year: 1992,
    cover: 'http://dummyimage.com/200x100.bmp/cc0000/ffffff',
    description:
      'Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.\n\nInteger ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.\n\nNam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.',
    duration: 1890,
    contentRating: 'NC-17',
    source: 'http://nba.com/penatibus/et/magnis/dis/parturient.xml',
    tags: ['Action|Horror|Sci-Fi', 'Comedy|Horror|Sci-Fi|Thriller']
  },
  {
    id: '786cad1c-0395-455a-9e4f-bd0d290f9ea6',
    title: 'Looper',
    year: 1992,
    cover: 'http://dummyimage.com/213x157.png/5fa2dd/ffffff',
    description:
      'Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.\n\nVestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.\n\nIn congue. Etiam justo. Etiam pretium iaculis justo.',
    duration: 2038,
    contentRating: 'G',
    source: 'https://nymag.com/urna/ut/tellus/nulla.xml',
    tags: ['Crime|Drama', 'Drama', 'Drama']
  },
  {
    id: '81f02fc4-4ef5-4c55-aa4c-7bce1e700937',
    title: 'Wisconsin Death Trip',
    year: 1997,
    cover: 'http://dummyimage.com/237x206.jpg/cc0000/ffffff',
    description:
      'Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.',
    duration: 1922,
    contentRating: 'NC-17',
    source: 'https://cnbc.com/non/mauris.jpg',
    tags: [
      'Action|Drama',
      '(no genres listed)',
      'Animation|Children|Comedy|Fantasy'
    ]
  },
  {
    id: '4b188c00-2f4d-4c93-ad97-33af22d600d7',
    title: 'Trouble with Dee Dee, The',
    year: 2006,
    cover: 'http://dummyimage.com/250x226.png/ff4444/ffffff',
    description:
      'Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.\n\nAenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.',
    duration: 1952,
    contentRating: 'PG-13',
    source: 'https://dion.ne.jp/varius/ut.html',
    tags: ['Comedy|Drama|Sci-Fi', 'Comedy', 'Drama', 'Documentary']
  },
  {
    id: '43222af7-8f54-4c60-be58-c9594a62b306',
    title:
      'Journey to Italy (Viaggio in Italia) (Voyage to Italy) (Voyage in Italy)',
    year: 1996,
    cover: 'http://dummyimage.com/238x119.png/5fa2dd/ffffff',
    description:
      'Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.',
    duration: 2005,
    contentRating: 'R',
    source: 'https://people.com.cn/a/odio/in/hac/habitasse/platea.aspx',
    tags: ['Drama', 'Comedy', 'Drama']
  },
  {
    id: '770988da-6d20-4143-91f5-f560c35ce1b1',
    title: 'Wrong Man, The',
    year: 1993,
    cover: 'http://dummyimage.com/193x169.jpg/dddddd/000000',
    description:
      'Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.',
    duration: 2032,
    contentRating: 'PG-13',
    source: 'http://livejournal.com/massa/volutpat.js',
    tags: ['Action|Drama|Sci-Fi|IMAX', 'Comedy|Drama|Romance']
  },
  {
    id: '1cd15b86-f438-4a8c-bcc3-88db4468a4ce',
    title: 'Ju Dou',
    year: 2011,
    cover: 'http://dummyimage.com/148x159.png/ff4444/ffffff',
    description:
      'Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.',
    duration: 2048,
    contentRating: 'R',
    source: 'https://cdbaby.com/congue/etiam/justo.png',
    tags: ['Crime|Drama|Mystery|Sci-Fi', 'Horror|Sci-Fi']
  },
  {
    id: 'f18f1c3d-a10b-48da-8f90-69fbc1258f31',
    title: 'Border, The',
    year: 2011,
    cover: 'http://dummyimage.com/220x132.png/cc0000/ffffff',
    description:
      'Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.',
    duration: 2038,
    contentRating: 'R',
    source: 'http://time.com/ligula.js',
    tags: ['Drama', 'Adventure', 'Drama', 'Adventure|Drama', 'Thriller']
  }
];

function filteredMoviesMock(tag) {
  return moviesMock.filter(movie => movie.tags.includes(tag));
}

class MoviesServiceMock {
  async getMovies() {
    return Promise.resolve(moviesMock);
  }

  async createMovie() {
    return Promise.resolve(moviesMock[0]);
  }
}

module.exports = {
  moviesMock,
  filteredMoviesMock,
  MoviesServiceMock
};
