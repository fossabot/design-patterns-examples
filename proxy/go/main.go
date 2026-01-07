package main

import "fmt"

// Subject interface
type Image interface {
	Display() string
}

// Real Subject
type RealImage struct {
	filename string
}

func NewRealImage(filename string) *RealImage {
	img := &RealImage{filename: filename}
	img.loadFromDisk()
	return img
}

func (r *RealImage) loadFromDisk() {
	fmt.Printf("Loading image from disk: %s\n", r.filename)
}

func (r *RealImage) Display() string {
	return fmt.Sprintf("Displaying image: %s", r.filename)
}

// Proxy
type ProxyImage struct {
	filename  string
	realImage *RealImage
}

func NewProxyImage(filename string) *ProxyImage {
	return &ProxyImage{filename: filename}
}

func (p *ProxyImage) Display() string {
	if p.realImage == nil {
		p.realImage = NewRealImage(p.filename)
	}
	return p.realImage.Display()
}

func main() {
	// Images are loaded only when displayed
	image1 := NewProxyImage("photo1.jpg")
	image2 := NewProxyImage("photo2.jpg")

	fmt.Println("\nFirst display call:")
	fmt.Println(image1.Display())
	
	fmt.Println("\nSecond display call (cached):")
	fmt.Println(image1.Display())
	
	fmt.Println("\nDisplay another image:")
	fmt.Println(image2.Display())
}
