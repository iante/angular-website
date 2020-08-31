import { Injectable } from '@angular/core';
import { InMemoryDbService, RequestInfo,  RequestInfoUtilities, ParsedRequestUrl, ResponseOptions, STATUS, getStatusText } from 'angular-in-memory-web-api';
//import { url } from 'inspector';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  constructor() { }
//creates an in memory bd where we are storing various values i.e users,posts
  createDb() {

    const users = [
      {id: 1, firstName: 'robert', lastName: 'murithi', 
      password: 'markmende132', email: 'maxmaine66@gmail.com',  bio: 'this is my bio', role: 'admin', image: 'user-1.jpg'},

      {id: 2, firstName: 'Nyagah', lastName: 'robert', 
      password: 'markmende132', email: 'maxmaine66@yahoo.com',  bio: 'this is my bio', role: 'admin', image: 'user-2.jpg'},
    ];

    //stores navmenu navigation items
    const menu = [
      {id: 1, title: 'Home', link: '/home', outlet: ''},
      {id: 2, title: 'About', link: '/about', outlet: ''},
      {id: 3, title: 'Services', link: '/services', outlet: ''},
      {id: 4, title: 'Gallery', link: '/gallery', outlet: ''},
      {id: 5, title: 'Testimonials', link: '/testimonials', outlet: ''},
      {id: 6, title: 'Clients', link: '/clients', outlet: ''},
      {id: 7, title: 'Pricing', link: '/pricing', outlet: ''},
      {id: 8, title: 'Blog', link: '/blog', outlet: ''},
      {id: 9, title: 'Contact Us', link: 'contactus', outlet: 'popup'},
      {id: 10, title: 'Subscribe', link: 'subscribe', outlet: 'popup'},
    ];

    //information about the various pages on the website

    const pages = [
      {id: 'intro',
        tagline: 'SUCESS',
        title: 'How We Help You To Sell Your Product',
        description: 'Robikan Solutions',
      },
      {id: 'clients',
        tagline: 'TRUST',
        title: 'Companies who use our services',
        description: 'Our clients',
      },
      {id: 'services',
        tagline: 'BELIEVING',
        title: 'Focusing On What Matters Most',
        description: 'Service Section'
      },
      {id: 'testimonials',
        tagline: 'FEEDBACK',
        title: 'What our customers are saying',
        description: 'This is what our customer\'s feel about us',
      },
      {id: 'pricing',
        tagline: 'YOUR CHOICE',
        title: 'We have the right package for you',
        description: '',
      },
      {id: 'gallery',
        tagline: 'We ❤ Doing amazing things',
        title: 'ROBIKAN SOLUTIONS',
        description: 'We are and amazing company',
      },
      {id: 'footer',
        copyrighttext: 'Made with ❤ by',
        developer: 'IAN MURITHI',
        developerlink: 'http://robikan.co.ke',
      },
      {id: 'blog',
        tagline: 'My thoughts',
        title: 'Thoughts become things',
        description: 'We are and amazing company',
      },
      {id: 'header',
        heading: 'ROBIKAN SOLUTIONS',
        headingtext: 'We sell Toners, Catridges, Copiers at affordable prices as well as web development services',
        buttontext: 'About Us',
        buttonlink: '/home',
        image: 'banner-image-1.jpg'
      },
    ];

    //features database
    const features = [
      {id: 1, icon: 'html5', title: 'Web Development',
      description: 'We create user friendly websites with attractive UI'},
      {id: 2, icon: 'bolt', title: 'User Friendly', description: 'Our staff is trained on how to deliver effective customer care to our clients'},
      {id: 3, icon: 'tablet', title: 'Technichal Support', description: 'Our team of qualified Technicians offer technichal support to clients who purchase our products'},
      {id: 4, icon: 'rocket', title: 'Affordable', description: 'Our Products are affordable and good quality'},
  ];

  //feedbacks

  const feedbacks = [
    {id: 1 , name: 'John Doe', userimage: 'user-1.jpg',comments: 'This compamny doing excellent Job',
    company: 'ABC'},
    {id: 2 , name: 'Roslyn Doe', userimage: 'user-2.jpg',
    comments: 'People seem to love the work they have done',
    company: 'XYZ'},
    {id: 3 , name: 'Thomas Doe', userimage: 'user-3.jpg',
    comments: 'This work is great, i reall loved working with them',
    company: 'PQR'},
  ];

  // companies block
  const companies = [
    {id: 1 , name: 'Tree', weblink: 'company-logo1.png', logo: 'company-logo1.png'},
    {id: 2 , name: 'Fingerprint', weblink: 'company-logo2.png', logo: 'company-logo2.png'},
    {id: 3 , name: 'The Man', weblink: 'company-logo3.png', logo: 'company-logo3.png'},
    {id: 4 , name: 'Mustache', weblink: 'company-logo4.png', logo: 'company-logo4.png'},
    {id: 5 , name: 'Goat', weblink: 'company-logo5.png', logo: 'company-logo5.png'},
    {id: 6 , name: 'Justice', weblink: 'company-logo6.png', logo: 'company-logo6.png'},
    {id: 7 , name: 'Ball', weblink: 'company-logo7.png', logo: 'company-logo7.png'},
    {id: 8 , name: 'Cold', weblink: 'company-logo8.png', logo: 'company-logo8.png'},
    {id: 9 , name: 'Cold', weblink: 'company-logo9.png', logo: 'company-logo9.png'},
];

// plans for pricing
const plans = [
  {id: 1, title: 'RICOH', subtitle: 'The standard version',
  description: 'Best Toner to buy', price: '1900', currency: 'ksh',
  downloads: '20 purchases', extensions: '2 Year Warranty',
  tutorials: 'TK-675', support: 'Forum Support', updates: '1 year free Service',
  buttontext: 'Buy Now', buttonlink: '#', featured: false
  },
  {id: 2, title: 'KYOCERA', subtitle: 'Most popular Toner',
  description: 'Best Toner for small copiers', price: '4900', currency: 'ksh',
  downloads: '25 purchases', extensions: '2 Year Warranty',
  tutorials: 'M990', support: 'Forum Support', updates: '2 year free updates',
  buttontext: 'Buy Now', buttonlink: '#', featured: true
  },
  {id: 3, title: 'AFICIO', subtitle: 'For the whole team',
  description: 'Best Toner for Large Organizations', price: '8000', currency: 'ksh',
  downloads: '10 purchases', extensions: '2 Year Warranty',
  tutorials: 'AFC210', support: 'Forum Support', updates: '1  Year Free service',
  buttontext: 'Buy Now', buttonlink: '#', featured: false
  }
];

// gallery images

const images = [
  {id: 1, name: 'gallery-image-1.jpg'},
  {id: 2, name: 'gallery-image-2.jpg'},
  {id: 3, name: 'gallery-image-3.jpg'},
  {id: 4, name: 'gallery-image-2.jpg'},
  {id: 5, name: 'gallery-image-1.jpg'},
  {id: 6, name: 'gallery-image-3.jpg'},
];

//social icons

const websites = [
  {id: 1, link: 'https://facebook.com/', title: 'Facebook', target: '_blank', username: 'jagmohan', icon: 'facebook'},
  {id: 2, link: 'https://googleplus.com/', title: 'Google+', target: '_blank', username: '+jagmohan', icon: 'google-plus'},
  {id: 3, link: 'https://twitter.com/', title: 'Twitter', target: '_blank', username: 'jagmohan', icon: 'twitter'},
  {id: 4, link: 'https://instagram.com/', title: 'Instagram', target: '_blank', username: 'admister_in', icon: 'instagram'},
  {id: 5, link: 'https://behance.com/', title: 'Behance', target: '_blank', username: 'jagmohan', icon: 'behance'},
];

  

    const posts = [
      {id:1, title:'Thoughts 1', author:'Robert', publishdate:'2020-08-19T07:22Z', 
      excert:'This is the summary of the article...', image:'gallery-image-1.jpg'},
  
      {id:2, title:'Thoughts 2', author:'Robert', publishdate:'2020-08-19T07:22Z', 
      excert:'This is the summary of the article...', image:'gallery-image-2.jpg'},
  
      {id:3, title:'Thoughts 3', author:'Robert', publishdate:'2020-08-19T07:22Z', 
      excert:'This is the summary of the article...', image:'gallery-image-3.jpg'},
  
      {id:4, title:'Thoughts 4', author:'Robert', publishdate:'2020-08-19T07:22Z', 
      excert:'This is the summary of the article...', image:'gallery-image-4.jpg'},
  
      {id:5, title:'Thoughts 5', author:'Robert', publishdate:'2020-08-19T07:22Z', 
      excert:'This is the summary of the article...', image:'gallery-image-5.jpg'},
  
      {id:6, title:'Thoughts 6', author:'Robert', publishdate:'2020-08-19T07:22Z', 
      excert:'This is the summary of the article...', image:'gallery-image-6.jpg'},
  
      {id:7, title:'Thoughts 7', author:'Robert', publishdate:'2020-08-19T07:22Z', 
      excert:'This is the summary of the article...', image:'gallery-image-2.jpg'},
  
      {id:8, title:'Thoughts 8', author:'Robert', publishdate:'2020-08-19T07:22Z', 
      excert:'This is the summary of the article...', image:'gallery-image-6.jpg'},
  
      {id:9, title:'Thoughts 9', author:'Robert', publishdate:'2020-08-19T07:22Z', 
      excert:'This is the summary of the article...', image:'gallery-image-1.jpg'},
  
      {id:10, title:'Thoughts 10', author:'Robert', publishdate:'2020-08-19T07:22Z', 
      excert:'This is the summary of the article...', image:'gallery-image-3.jpg'},
    ];
  

    return{users, posts, menu, pages, 
      features, feedbacks, companies, plans, images, websites};
  }

  

  getToken(user){
    return 'this is a token';
  }

  get (reqInfo: RequestInfo) {
    if (reqInfo.collectionName === 'posts') {
      return this.getArticles(reqInfo);
    }
    return undefined; /* if its not a get post request, undefined returns the 
    default get operations*/
  }

  getArticles(reqInfo: RequestInfo) {

    return reqInfo.utils.createResponse$(() => {
      const dataEncapsulation = reqInfo.utils.getConfig().dataEncapsulation;
      const collection = reqInfo.collection;
      const id = reqInfo.id;
      /* if no id, return the complete collection*/
      const data = id === undefined ? collection : reqInfo.utils.findById(collection, id);
  
      console.log(data);
  
      const options: ResponseOptions = data ?
      {
        body: dataEncapsulation ? { data } : data,
        status: 200
      } :
      {
        body: { error: `Post not found` },
        status: 404
      };
  
      options.statusText = options.status === 200 ? 'ok' : 'Not Found' ;
      options.headers = reqInfo.headers;
      options.url = reqInfo.url;
      return options;
  
  
    });
  }
  



 // parseRequestUrl(url: string, utils: RequestInfoUtilities): ParsedRequestUrl{

  //  let newUrl = url.replace(/api\/users\/signup/, '/api/users/');

  //  newUrl = url.replace(/api\/users\/login/, '/api/users/');
   // const parsed = utils.parseRequestUrl(newUrl);
   // console.log('parseRequestUrl override of'${url}':', parsed);
   // return parsed;
  //}

  // overriding post method

  post(reqInfo: RequestInfo){
   
    if (reqInfo.id === 'login') { //checks if login is in the url
      console.log('from login');
      return reqInfo.utils.createResponse$(() => {
        const dataEncapsulation = reqInfo.utils.getConfig().dataEncapsulation;
        const users = reqInfo.collection.find(user => {
          //extracts email and password and compares it to the user=>
          return reqInfo.req['body'].email === user.email && reqInfo.req['body'].password === user.password ;
        });
        let responseBody = {};
        if (users){
          responseBody = {
            id: users.id,
            firstName: users.firstName,
            lastName: users.lastName,
            bio: users.bio,
            image: users.image,
            email: users.email,
            token: this.getToken(users)
          };
        }
        const options: ResponseOptions = responseBody ?
        {
          body: dataEncapsulation ? { responseBody } : responseBody,
          status: 200
        } :
        {
          body: { error: `'User' with email='${reqInfo.req['body'].email}' not found` },
          status: 404
        };
        options.statusText = options.status === 200 ? 'OK': 'Not Found';
        options.headers = reqInfo.headers;
        options.url = reqInfo.url;
        return options;

      });

     }else if (reqInfo.id === 'signup') {
      reqInfo.id = null;
      console.log(' from signup');
    }
  }
  
}

