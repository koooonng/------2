
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import Icon from "@/components/ui/icon";

type Photo = {
  id: number;
  url: string;
  alt: string;
  thumbnail?: string;
};

type PhotoGalleryProps = {
  title: string;
  photos: Photo[];
};

const PhotoGallery = ({ title, photos }: PhotoGalleryProps) => {
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);

  return (
    <Card className="mb-12 border-[#F5DEB3] bg-white/70 backdrop-blur-sm shadow-md">
      <CardHeader className="text-center">
        <CardTitle className="text-2xl text-[#3C3830]">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {photos.map((photo) => (
            <div 
              key={photo.id} 
              className="overflow-hidden rounded-md border border-[#F5DEB3] cursor-pointer hover-scale transition-all duration-300"
              onClick={() => setSelectedPhoto(photo)}
            >
              <AspectRatio ratio={3/4}>
                <img 
                  src={photo.thumbnail || photo.url} 
                  alt={photo.alt}
                  className="object-cover w-full h-full"
                />
              </AspectRatio>
            </div>
          ))}
        </div>
        
        <Dialog open={selectedPhoto !== null} onOpenChange={(open) => !open && setSelectedPhoto(null)}>
          <DialogContent className="max-w-3xl p-1 bg-white/95">
            {selectedPhoto && (
              <div className="relative">
                <img 
                  src={selectedPhoto.url} 
                  alt={selectedPhoto.alt}
                  className="w-full h-auto rounded"
                />
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="absolute top-2 right-2 bg-white/80 hover:bg-white"
                  onClick={() => setSelectedPhoto(null)}
                >
                  <Icon name="X" size={20} />
                </Button>
                
                <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-2">
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    className="bg-white/80 hover:bg-white disabled:opacity-50"
                    disabled={photos.indexOf(selectedPhoto) === 0}
                    onClick={() => {
                      const currentIndex = photos.indexOf(selectedPhoto);
                      if (currentIndex > 0) {
                        setSelectedPhoto(photos[currentIndex - 1]);
                      }
                    }}
                  >
                    <Icon name="ChevronLeft" size={20} />
                  </Button>
                  
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    className="bg-white/80 hover:bg-white disabled:opacity-50"
                    disabled={photos.indexOf(selectedPhoto) === photos.length - 1}
                    onClick={() => {
                      const currentIndex = photos.indexOf(selectedPhoto);
                      if (currentIndex < photos.length - 1) {
                        setSelectedPhoto(photos[currentIndex + 1]);
                      }
                    }}
                  >
                    <Icon name="ChevronRight" size={20} />
                  </Button>
                </div>
              </div>
            )}
          </DialogContent>
        </Dialog>
      </CardContent>
    </Card>
  );
};

export default PhotoGallery;
