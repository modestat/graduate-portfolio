Perfect! Let's recap what just happened.

## 🎯 **What We Just Did**

You went from showing **ALL images at once** to showing **ONE image at a time**.

## 📝 **Theory Recap**

### **Method 1: Using .map() (What you had before)**
```jsx
{selectedProject.images.map((image, index) => (
  <div key={index}>
    <img src={image.src} />
    <p>{image.caption}</p>
  </div>
))}
```

**What .map() does:**
- **Loops through EVERY item** in the array
- **Creates HTML for EACH item**
- Result: 3 images = 3 `<div>` elements on screen

**When to use .map():**
- When you want to show ALL items (like a list of all projects)
- Photo galleries where you see all photos at once
- Lists, grids, etc.

### **Method 2: Array Index (What you just implemented)**
```jsx
const [imageNumber, setImageNumber] = useState(0);

<div>
  <img src={selectedProject.images[imageNumber].src} />
  <p>{selectedProject.images[imageNumber].caption}</p>
</div>
```

**What array indexing does:**
- **Picks ONE specific item** from the array
- **Creates HTML for ONLY that item**
- Result: 3 images = 1 `<div>` element on screen (showing different content)

**When to use indexing:**
- Carousels/sliders (show one at a time)
- Tabs (show one panel at a time)
- Pagination (show one page at a time)

## 🔑 **The Key Difference**

- **`.map()`** = "Show ALL of them"
- **`[index]`** = "Show THIS ONE"

Does this difference make sense to you?