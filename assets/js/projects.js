$(document).ready(() => {
    render_projects('featured');
})


let render_projects = (slug) => {
    let projects_area = $('.projects-wrapper');

    $('.white-button').removeClass('white-button-hover');
    $(`#${slug}`).addClass('white-button-hover');

    let projects_obj = [
        {
            image: 'assets/images/Bypass Filter.png',
            link: 'https://drive.google.com/file/d/1azvqeopjZmFF508odwoNUY92IqiM40OZ/view?usp=share_link',
            title: 'Bypass Filter',
            demo: false,
            technologies: ['SolidWorks'],
            description: "Bypass filter assembly drawing.",
            categories: ['engineering drawing']
        },
{
            image: 'assets/images/Centrifugal Compressor blade.png',
            link: 'https://drive.google.com/file/d/1R1bo2xV6q4P_H2pTDeLxicBtymLXl9QW/view?usp=sharing',
            title: 'Centrifugal Compressor blade',
            demo: false,
            technologies: ['SolidWorks'],
            description: "Centrifugal compressor impeller with blade Engineering drawing.",
            categories: ['featured','engineering drawing']
        },
{
            image: 'assets/images/Coffee Grinder.jpg',
            link: 'https://drive.google.com/file/d/1UqgXIH12s3TtI22bmVHEKj5Nfx3f36Ot/view?usp=sharing',
            title: 'Coffee Grinder',
            demo: 'https://drive.google.com/file/d/1N5mrCab5JwRka2ERP04QllMrg2DIbZhE/view?usp=sharing',
            technologies: ['SolidWorks'],
            description: "A 3d render of manual coffee grinder and demo.",
            categories: ['featured','3d models']
        },
{
            image: 'assets/images/Four Bar Linkage.png',
            link: 'https://drive.google.com/file/d/1LgjsgtEINg3M4v7dkKSX7zQHH1lP6ZM0/view?usp=sharing',
            title: 'Four Bar Linkage',
            demo: false,
            technologies: ['Inventor'],
            description: "Four bar linkage assembly drawing.",
            categories: ['engineering drawing']
        },
{
            image: 'assets/images/Pipe Thread.png',
            link: 'https://drive.google.com/file/d/1wuGIayrrjfgc2cdrJ_V-D_DwF1duI2It/view?usp=sharing',
            title: 'Pipe Thread',
            demo: false,
            technologies: ['SolidWorks'],
            description: "Pipe thread engineering drawing.",
            categories: ['engineering drawing']
        },
{
            image: 'assets/images/Motorize Mini Taffy Puller.png',
            link: 'https://drive.google.com/file/d/1Wg-xHy9dHGoOofNwRygdRqKrS67eHRj_/view?usp=share_link',
            title: 'Motorize Mini Taffy Puller',
            demo: 'https://drive.google.com/file/d/1GiRx3iL_xoBxWtZ_x1QohPDSXDMLbDFp/view?usp=sharing',
            technologies: ['AutoCAD'],
            description: "Motorize mini taffy puller 3d render and video demo.",
            categories: ['featured','3d models']
        },
    ]

    let projects = [];
    if(slug == 'all') {
        projects = projects_obj.map(project_mapper);
    } 
    else {
        projects = projects_obj.filter(project => project.categories.includes(slug)).map(project_mapper);
    }
    projects_area.hide().html(projects).fadeIn();
}

let project_mapper = project => {
    return `
        <div class="wrapper">
                
            <div class="card radius shadowDepth1">

                ${project.image ? 
                    `<div class="card__image border-tlr-radius">
                        <a href="${project.link}">
                            <img src="${project.image}" alt="image" id="project-image" class="border-tlr-radius">
                        </a>
                    </div>`           
                : ''}

        
                <div class="card__content card__padding">
        
                    <article class="card__article">
                        <h2><a href="${project.link}">${project.title}</a></h2>
        
                        <p class="paragraph-text-normal">${project.description} ${project.demo ? `<a href="${project.demo}">Demo</a>` : ''}</p>
                    </article>

                                
                    <div class="card__meta">
                        ${project.technologies.map(tech =>
                            `<span class="project-technology paragraph-text-normal">${tech}</span>`
                        ).join('')}
                    </div>

                </div>
            </div>
        </div>
    `
}

let selected = (slug) => {
    render_projects(slug);
}
