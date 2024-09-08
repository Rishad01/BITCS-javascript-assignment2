class Person{
    constructor(name,age,salary,sex)
    {
        this.name=name;
        this.age=age;
        this.salary=salary;
        this.sex=sex;
    }

    static sort(arr,parameter,order)
    {
        let sortedArray=[...arr];

        const quicksort=(arr,parameter,order)=>{
            if(arr.length<=1)
                return arr;

            let pivot=arr[arr.length-1];
            let left=[];
            let right=[];

            for(let i=0;i<arr.length-1;i++)
            {
                if(order==='asc'){
                    if(arr[i][parameter]<=pivot[parameter])
                    {
                        left.push(arr[i]);
                    }
                    else
                    {
                        right.push(arr[i]);
                    }
                }
                else{
                        if(arr[i][parameter]<=pivot[parameter])
                        {
                            right.push(arr[i]);
                        }
                        else
                        {
                            left.push(arr[i]);
                        }
                }
            }

            return [...quicksort(left,parameter,order),pivot,...quicksort(right,parameter,order)];
        }

        return quicksort(sortedArray,parameter,order);
    }
}

const persons=[
    new Person('Rohan',18,10000,'male'),
    new Person('Aarti',28,30000,'female'),
    new Person('Mohan',23,20000,'male'),
    new Person('Monica',33,40000,'female')
];

const sortNameAsc=Person.sort(persons,'name','asc');
console.log(sortNameAsc);

const sortNameDesc=Person.sort(persons,'name','desc');
console.log(sortNameDesc);

const sortAgeAsc=Person.sort(persons,'age','asc');
console.log(sortAgeAsc);

const sortAgeDesc=Person.sort(persons,'age','desc');
console.log(sortAgeDesc);

const sortSalaryAsc=Person.sort(persons,'salary','asc');
console.log(sortSalaryAsc);

const sortSalaryDesc=Person.sort(persons,'salary','desc');
console.log(sortSalaryDesc);

const sortSexAsc=Person.sort(persons,'sex','asc');
console.log(sortSexAsc);

const sortSexDesc=Person.sort(persons,'sex','desc');
console.log(sortSexDesc);