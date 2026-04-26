import { useState } from "react";

function ItemForm({ initialValues, onSubmit, submitText }) {
  const [name, setName] = useState(initialValues?.name || "");
  const [category, setCategory] = useState(initialValues?.category || "");
  const [price, setPrice] = useState(initialValues?.price || "");
  const [description, setDescription] = useState(initialValues?.description || "");
  const [imageUrl, setImageUrl] = useState(initialValues?.imageUrl || "");
  const [countryOfOrigin, setCountryOfOrigin] = useState(initialValues?.countryOfOrigin || "");

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      name,
      category,
      price: Number(price),
      description,
      imageUrl,
      countryOfOrigin,
    };
    onSubmit(formData);
  };

  return (
    <form className="form-card" onSubmit={handleSubmit}>
      <h2>{submitText}</h2>

      <label>Item Name</label>
      <input name="name" value={name} onChange={(e) => setName(e.target.value)} required />

      <label>Category</label>
      <input name="category" value={category} onChange={(e) => setCategory(e.target.value)} required />

      <label>Price</label>
      <input
        type="number"
        name="price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        required
      />

      <label>Description</label>
      <textarea
        name="description"
        rows="4"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
      />

      <label>Image URL</label>
      <input name="imageUrl" value={imageUrl} onChange={(e) => setImageUrl(e.target.value)} />

      <label htmlFor="countryOfOrigin">Country of Origin:</label>
      <input
        type="text"
        id="countryOfOrigin"
        value={countryOfOrigin}
        onChange={(e) => setCountryOfOrigin(e.target.value)}
        placeholder="Enter country of origin"
        required
      />

      <button className="btn primary" type="submit">{submitText}</button>
    </form>
  );
}

export default ItemForm;