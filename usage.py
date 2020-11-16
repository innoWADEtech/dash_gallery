import dash_gallery
import dash
from dash.dependencies import Input, Output, State
import dash_html_components as html

app = dash.Dash(__name__)

IMAGES =[
    {
        'src': "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg",
        'thumbnail': "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_n.jpg",
        'thumbnailWidth': 320,
        'thumbnailHeight': 174,
        'isSelected': True,
        'caption': "After Rain (Jeshu John - designerspics.com)"
    },
    {
        'src': "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
        'thumbnail': "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_n.jpg",
        'thumbnailWidth': 320,
        'thumbnailHeight': 212,
        'tags': [{'value': "Ocean", 'title': "Ocean"}, {'value': "People", 'title': "People"}],
        'caption': "Boats (Jeshu John - designerspics.com)"
    },

    {
        'src': "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_b.jpg",
        'thumbnail': "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_n.jpg",
        'thumbnailWidth': 320,
        'thumbnailHeight': 212
    },
    {
        'src': "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHElEQVQI12P4//8/w38GIAXDIBKE0DHxgljNBAAO9TXL0Y4OHwAAAABJRU5ErkJggg==",
        'thumbnail': "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHElEQVQI12P4//8/w38GIAXDIBKE0DHxgljNBAAO9TXL0Y4OHwAAAABJRU5ErkJggg==",
        'tags':[{'value': 'data', 'title': 'data'}],
        'caption': 'Data',
        'thumbnailWidth': 320,
        'thumbnailHeight': 212,
    }
]

app.layout = html.Div([
    dash_gallery.DashGallery(
        id='input',
        images = IMAGES,
        options = {'lightBoxWidth': 500, 'rowHeight': 100, 'showImageCount': False, 'margin': 5}
    ),
    html.Div(id='output'),
    html.Button(id='options')
])


@app.callback(Output('output', 'children'), [Input('input', 'selected')])
def display_output(images):
    # selected = []
    # for image in images:
    #     select = False
    #     if 'isSelected' in image:
    #         select = image['isSelected']
    #     selected.append(select)
    return 'You have selected {}'.format(images)

@app.callback(Output('input','options'),
              Input('options', 'n_clicks'),
              State('input','options'))
def update(n_clicks, options):
    if options == None:
        return dash.no_update
    if n_clicks:
        if options['rowHeight'] == 100:
            options['rowHeight'] = 300
        else:
            options['rowHeight'] = 100
        # options = {'rowHeight': 300}
        return options
    else:
        return dash.no_update

if __name__ == '__main__':
    app.run_server(debug=True)
