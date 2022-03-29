# Lucas Mace Photography
A website to showcase my photography and learn NextJS.

## To Do
- Make navigation background transparent
- Nav background gets color when mouseover
- Nav is fixed to the top of the page
- Instead of a hero image, make component that has the photo on one side and description on other
    - Have "l" or "r" as an enum prop for what side the photo is on
    - Function for toggling a state(? Ref?) for left or right and returning a value
        - photoSide={togglePhotoBlock}
        - Could I use 1 state object to store multiple non-state values?
        - If no title or description, show full size
    - Click the photo to view full screen
- Image tag optimizing download sizes
    - layout="responsive"
- Photos Page
    - List of albums
        - People
        - Bikes
        - Trash or Whatever
        - Weddings
        - Misc
- Album Page
    - Flex container
    - Stacks of photos on top of each other as an album
        - Maybe 3 or 4
        - Photos expand / spread out on mouseover?
            - Darkens other albums on page
        - Rotation is slightly off from each other
        - Randomize rotation on each load
    - Individual album pages should scroll
- Have all photos load in from API