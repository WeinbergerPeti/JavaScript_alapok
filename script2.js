/* tömbök (lista) */

var tomb=[];
var tomb2=[2,3,4,5,6];
var tomb3=[4];

console.log(tomb.length);
console.log(tomb2.length);
console.log(tomb3.length);

tomb2[0]=12;


var txt="";
for (let index = 0; index < tomb2.length; index++) 
{
    txt+=tomb2[index]+", ";
}

console.log(txt);

var gyumolcs=["alma", "málna", "eper", "barack", "ribizli"];
var gyumolcsSzin=["piros", "piros", "sárga", "piros", "piros"];
var gyumolcsAr=[240,500,300,250,500];


var i=0;
while(i<gyumolcsSzin.length && !(gyumolcsSzin[i]==="sárga"))
{
    i++;
}

var van=i<gyumolcsSzin.length;
console.log("Van sárga színű gyümölcs: "+van);

/* Mennyi a piros színű gyümölcsök értéke */

var osszesen=0;
for (let i = 0; i < gyumolcsSzin.length; i++) 
{
    if(gyumolcsSzin[i]==="piros")
    {
        osszesen+=gyumolcsAr[i]
    }
    
}

console.log("A piros színű gyümölcsök értéke: "+osszesen+"Ft");


/* Hány 300Ft alatti termék van? */
var db=0;
for (let i = 0; i < gyumolcsAr.length; i++) 
{
    if(gyumolcsAr[i]<300)
    {
        db++;
    }    
}

console.log("300Ft alatti termékek darabja: "+db);

/* van-e 1000Ft feletti termék? */

i=0;
while(i<gyumolcsAr.length && !(gyumolcsAr[i]>1000))
{
    i++;
}

van=i<gyumolcsAr.length;
console.log("1000Ft-nál nagyobb termék ára van-e? "+van)

console.log(szo);
var szo="";
