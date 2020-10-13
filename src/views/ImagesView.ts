import { Image } from "../models/Image";

export default {
  render(image: Image) {
    return {
      url: `http://localhost:3001/uploads/${image.path}`,
      id: image.id,
    };
  },
  renderMany(images: Image[]) {
    return images.map((image) => this.render(image));
  },
};
