// const newElement=document.createElement("h2")
// newElement.textContent="Strike is coming"
// newElement.id="second"

//select element
// const element=document.getElementById("first")
// element.after(newElement)
// element.before(newElement)

// const newElement2=document.createElement('h3')
// newElement2.textContent="Diwali aa rahi hai"
// newElement2.id="third"
// newElement2.className="Diwali"
// newElement2.className+=" Holi "
// newElement2.classList.add("Diwali");
// newElement2.classList.add("Holi");
// newElement2.classList.remove("Diwali")


// newElement2.style.backgroundColor="brown"
// newElement2.style.fontSize="30px"
// newElement2.setAttribute("hello","ji")

// element.before(newElement2)

// console.log(newElement2);
// console.log(newElement2.getAttribute("id"));
// console.log(newElement2.getAttribute("class"));
// console.log(newElement2.getAttribute("hello"));

// const list=document.createElement("li")
// list.textContent="Milk"
// const list2=document.createElement("li")
// list2.textContent="Cake"
// const list3=document.createElement("li")
// list3.textContent="Halwa"
// const list4=document.createElement("li")
// list4.textContent="Paneer"

// const unorderElement=document.getElementById("listing")

// unorderElement.append(list,list2);
// unorderElement.prepend(list3);

// list.after(list4)
// unorderElement.children[1].after(list4)


const arr=["Milk", "Halwa", "Panner", "Tofu ", "Tea"]
const unorderElement=document.getElementById("listing")
const fragment=document.createDocumentFragment();

for(let food of arr){
    const list=document.createElement("li")
    list.textContent=food;
    fragment.append(list);

    // unorderElement.append(list)
}
unorderElement.append(fragment);

const s1=document.getElementById("first");
s1.remove();

const month=document.getElementById("ten");
const lister=document.createElement("li");
// lister.textContent="Help";

lister.innerHTML="<h2>Help</h2>"
month.prepend(lister)




// month.insertAdjacentElement("afterbegin", lister )
// month.insertAdjacentElement("beforebegin", lister )
// month.insertAdjacentElement("beforeend", lister )
// month.insertAdjacentElement("afterend", lister )








