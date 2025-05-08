function formatString(input: string, toUpper?: boolean): string {
    if(toUpper == true) {
        
        console.log(input.toUpperCase())
        return input.toUpperCase()
    } else {
        
        console.log(input.toLowerCase())
        return input.toLowerCase()
    }
}



function filterByRating(items: { title: string; rating: number }[]): { title: string; rating: number }[] {
    
    const a = items.filter(a => a.rating > 4 )
    console.log(a)
    
}




function concatenateArrays<T>(...arrays: T[][]): T[] {
    const a = arrays.flat()
    console.log(a)
}

  




class Vehicle  {
    private make: string;
    private year: number;

    constructor(make: string , year: number) {
        this.make = make,
        this.year = year 
    }

    getInfo(): string {
        return `make: ${this.make}, year: ${this.year}`;
    }
     

}

class Car extends Vehicle {
    private model: string;

    constructor(make: string, year: number, model: string) {
        super(make, year)
        this.model = model
    }

    getModel():  string{
        return this.model;
    }
}





function processValue(value: string | number): number {
    if(typeof value === "number"){
        console.log(value*2)

    } else {
        console.log(value.length) 

    }
}

     

interface Product {
    name: string;
    price: number;
  }
  
  function getMostExpensiveProduct(products: Product[]): Product | null {
    if (products.length === 0) {
        console.log(null)
        return null; 
      }

        const a = products.reduce((a,b) => b.price > a.price ? b : a)
        console.log(a)
  }


 


enum Day {
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday
  }
  
  function getDayType(day: Day): string {
    if(day === Day.Saturday || day === Day.Sunday) {
        console.log("Weekend")
    }else (
        console.log("weekday")
    )
  }




async function squareAsync(n: number): Promise<number> {
  if (n < 0) {
    return Promise.reject(new Error("Negative"));

  }

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(n * n);
    }, 1000);
  });
}

