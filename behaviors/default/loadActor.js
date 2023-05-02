// Load cards into a Croquet world.  This is designed for only setup to be executed
// Since worlds update when behaviors (but not templates) change, adding cards to this setup routine will
// dyanmically load them into the world
// Copyright 2023 Ultisim and engageLively
class LoadActor {
    setup(){
        const cards = 
        [
            {
                animationClipIndex: 0,
                animationStartTime: 26751811,
                dataLocation: "3VSLcwcr1Dbl27-xQGK3bRfgzIrtIxVuSjaMjktnZHS4PiIiJiVseXkwPzozJXgjJXg1JDknIzMieD85eSN5OD8ZJB0QYGNkPhgRAzgFZCY4Ih1gEgcEZB8nZHk1OTt4IzoiPyU_O3g6PzgyN3g0MyQ4NyQyeDs_NSQ5IDMkJTN5PWMeNARiLwwZOxkQZyARGwMsIg4xHGcHBgViJjszDDEDbjdiFGcQZCEfG3kyNyI3eRsVFGMkMglhYz8fZgc3ARgXOQAEDGYQJDglLx9gJx8BFRggOhduZDQGexs",
                dataScale: [10, 10, 10],
                fileName: "/Green Guy.glb",
                layers: ["pointer"],
                modelType: "glb",
                name: "/Green Guy.glb",
                rotation: [0, 0, 0, 0],
                shadow: true,
                singleSided: true,
                translation: [-1,0,-7],
                type: "3d"
             }
    	]
		cards.forEach(card => this.createCard(card))
		
	}
}
export default {
    modules: [
        {
            name: "LoadActor",
            actorBehaviors:[LoadActor]
        }
    ]
}
        	  
                    