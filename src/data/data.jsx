import p1 from "../assets/1.jpg";
import p2 from "../assets/2.jpg";
import p3 from "../assets/3.jpg";
import p4 from "../assets/4.jpg";
import p5 from "../assets/5.jpg";
import p6 from "../assets/6.jpg";
import p7 from "../assets/7.jpg";
import p8 from "../assets/8.jpg";
import p9 from "../assets/9.jpg";
import p10 from "../assets/10.jpg";
import p11 from "../assets/11.jpg";
import p12 from "../assets/12.jpg";
import p13 from "../assets/13.jpg";
import p14 from "../assets/14.jpg";
import p15 from "../assets/15.jpg";
import p16 from "../assets/16.jpg";
import p17 from "../assets/17.jpg";
import p18 from "../assets/18.jpg";
import p19 from "../assets/19.jpg";
import p20 from "../assets/20.jpg";

/* cards */
import a1 from "../assets/card/1-a.jpg";
import b1 from "../assets/card/1-b.jpg";
import a2 from "../assets/card/2-a.jpg";
import b2 from "../assets/card/2-b.jpg";
import a3 from "../assets/card/3-a.jpg";
import b3 from "../assets/card/3-b.jpg";
import a4 from "../assets/card/4-a.jpg";
import a5 from "../assets/card/5-a.jpg";
import b5 from "../assets/card/5-b.jpg";
import a6 from "../assets/card/6-a.jpg";
import b6 from "../assets/card/6-b.jpg";
import a7 from "../assets/card/7-a.jpg";
import b7 from "../assets/card/7-a.jpg";
import a8 from "../assets/card/8-a.jpg";
import b8 from "../assets/card/8-a.jpg";
import a9 from "../assets/card/9-a.jpg";
import b9 from "../assets/card/9-a.jpg";
import a10 from "../assets/card/10-a.jpg";
import b10 from "../assets/card/10-b.jpg";
import a11 from "../assets/card/11-a.jpg";
import b11 from "../assets/card/11-a.jpg";
import a12 from "../assets/card/12-a.jpg";
import b12 from "../assets/card/12-a.jpg";
import a13 from "../assets/card/13-a.jpg";
import a14 from "../assets/card/14-a.jpg";
import a15 from "../assets/card/15-a.jpg";
import b15 from "../assets/card/15-b.jpg";
import a16 from "../assets/card/16-a.jpg";
import b16 from "../assets/card/16-a.jpg";
import a17 from "../assets/card/17-a.jpg";
import b17 from "../assets/card/17-b.jpg";
import c17 from "../assets/card/17-c.jpg";
import a18 from "../assets/card/18-a.jpg";
import a19 from "../assets/card/19-a.jpg";
import b19 from "../assets/card/19-a.jpg";
import a20 from "../assets/card/20-a.jpg";



 const pics = [
    {   no:1,
        pic:p1,
        a:a1,
        b:b1,
        double: false,
        a1x:800 ,
        a1y:367,
        a2x:800 ,
        a2y: 805,
        b1x:800,
        b1y:367,
        b2x:800,
        b2y:840
    },
    {   no:2,
        pic:p2,
        double:false,
        a:a2,
        b:b2
    },
    {   
        no: 3,
        pic: p3,
        a: a3,
        b: b3,
        double: true
    },
    {   
        no: 4,
        pic: p4,
        double: true,
        a: a4
    },{   
        no: 5,
        pic: p5,
        a: a5,
        b: b5,
        double: true
    },
    {   
        no: 6,
        pic: p6,
        double: true,
        a: a6,
        b: b6
    },
    {   
        no: 7,
        pic: p7,
        a: a7,
        b: b7,
        double: true
    },
    {   
        no: 8,
        pic: p8,
        double: true,
        a: a8,
        b: b8
    },
    {   
        no: 9,
        pic: p9,
        double: true,
        a: a9
    },
    {   
        no: 10,
        pic: p10,
        double: false,
        a: a10,
        b: b10
    },
    {   
        no: 11,
        pic: p11,
        double: false,
        a: a11
    },
    {   
        no: 12,
        pic: p12,
        double: true,
        a: a12
    },
    {   
        no: 13,
        pic: p13,
        double: true,
        a: a13,
    },
    {   
        no: 14,
        pic: p14,
        double: false,
        a: a14
    },
    {   
        no: 15,
        pic: p15,
        double: false,
        a: a15,
        b: b15
    },
    {   
        no: 16,
        pic: p16,
        double: true,
        a: a16
    },
    {   
        no: 17,
        pic: p17,
        double: true,
        a: a17,
        b: b17,
        c: c17
    },
    {   
        no: 18,
        pic: p18,
        double: true,
        a: a18
    },
    {   
        no: 19,
        pic: p19,
        double: true,
        a: a19,
        b:b19
    },
    {   
        no: 20,
        pic: p20,
        double: true,
        a: a20,
    }
];

const canvasSizes = [
    {   
        no:1,
        a:{
            x1:800,
            y1:367,
            x2:830,
            y2:805
         },
         b:{
            x1:800,
            y1:367,
            x2:880,
            y2:845
         }
    },{
        no:2,
        a:{
            x1:800,
            y1:367,
            x2:840,
            y2:805
        },b:{
            x1:800,
            y1:367,
            x2:640,
            y2:850
        }
    },
    {
        no:3,
        a:{
            x1:870,
            y1:310,
            x2:850,
            y2:840
        },b:{
            x1:870,
            y1:310,
            x2:850,
            y2:840
        }
    },
    {
        no:4,
        a:{
            x1:850,
            y1:370,
            x2:850,
            y2:800
        }
    },
    {
        no:5,
        a:{
            x1:860,
            y1:314,
            x2:860,
            y2:780
        },b:{
            x1:860,
            y1:314,
            x2:860,
            y2:780
        }
    },
    {
        no:6,
        a:{
            x1:880,
            y1:345,
            x2:880,
            y2:840
        },b:{
            x1:880,
            y1:345,
            x2:880,
            y2:840
        }
    },
    {
        no:7,
        a:{
            x1:825,
            y1:285,
            x2:470,
            y2:770
        },b:{
            x1:815,
            y1:285,
            x2:480,
            y2:770
        }
    },
    {
        no:8,
        a:{
            x1:510,
            y1:330,
            x2:520,
            y2:870
        },b:{
            x1:520,
            y1:330,
            x2:530,
            y2:870
        }
    },
    {
        no:9,
        a:{
            x1:850,
            y1:340,
            x2:850,
            y2:820
        }
    },
    {
        no:10,
        a:{
            x1:430,
            y1:340,
            x2:490,
            y2:830
        },b:{
            x1:400,
            y1:340,
            x2:820,
            y2:840
        }
    },
    {
        no:11,
        a:{
            x1:400,
            y1:340,
            x2:830,
            y2:835
        }
    },
    {
        no:12,
        a:{
            x1:870,
            y1:335,
            x2:870,
            y2:830
        }
    },
    {
        no:13,
        a:{
            x1:850,
            y1:335,
            x2:850,
            y2:830
        }
    },
    {
        no:14,
        a:{
            x1:840,
            y1:335,
            x2:510,
            y2:840
        }
    },
    {
        no:15,
        a:{
            x1:840,
            y1:335,
            x2:840,
            y2:805
        },b:{
            x1:840,
            y1:335,
            x2:460,
            y2:825
        }
    },
    {
        no:16,
        a:{
            x1:850,
            y1:320,
            x2:850,
            y2:870
        }
    },
    {
        no:17,
        a:{
            x1:720,
            y1:485,
            x2:720,
            y2:860
        },b:{
            x1:720,
            y1:445,
            x2:720,
            y2:820
        },c:{
            x1:830,
            y1:370,
            x2:830,
            y2:835
        }
    },
    {
        no:18,
        a:{
            x1:830,
            y1:310,
            x2:830,
            y2:820
        }
    },
    {
        no:19,
        a:{
            x1:850,
            y1:400,
            x2:850,
            y2:790
        },b:{
            x1:850,
            y1:400,
            x2:850,
            y2:790
        }
    },
    {
        no:20,
        a:{
            x1:860,
            y1:375,
            x2:860,
            y2:830
        }
    }

]
export {canvasSizes}
export default  pics;