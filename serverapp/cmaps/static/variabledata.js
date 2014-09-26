// Data for CommandMaps interface
var home = {
			selected:0,
			tabs:[{
				title:'Home',
				groups:[{
					title:'Clipboard',
					tools:[{
						type:'splitbutton',
						name:'paste',
						text:'Paste',
						iconCls:'icon-paste-large',
						iconAlign:'top',
						size:'large',
						menuItems:[{
							name:'paste',
							text:'Paste',
							iconCls:'icon-paste'
						},{
							name:'paste-special',
							text:'Paste Special...',
							iconCls:'icon-paste'
						}]
					},{
						type:'toolbar',
						dir:'v',
						tools:[{
							name:'cut',
							text:'Cut',
							iconCls:'icon-cut'
						},{
							name:'copy',
							text:'Copy',
							iconCls:'icon-copy'
						},{
							name:'format',
							text:'Format',
							iconCls:'icon-format'
						}]
					}]
				},{
					title:'Font',
					tools:[{
						type:'toolbar',
						tools:[{
							type:'combobox',
							valueField:'text',
							textField:'text',
							data:[{text:'Arial',selected:true},{text:'Century'},{text:'Tahoma'}],
							width:116,
							panelHeight:'auto',
							editable:false
						},{
							type:'combobox',
							valueField:'text',
							textField:'text',
							data:[{text:'8'},{text:'12',selected:true},{text:'14'}],
							width:40,
							panelHeight:'auto',
							editable:false
						}]
					},{
						type:'toolbar',
						style:{marginLeft:'5px'},
						tools:[{
							name:'increase-font',
							iconCls:'icon-increase-font'
						},{
							name:'decrease-font',
							iconCls:'icon-decrease-font'
						}]
					},{
						type:'toolbar',
						style:{clear:'both',marginTop:'2px'},
						tools:[{
							name:'bold',
							iconCls:'icon-bold',
							toggle:true
						},{
							name:'italic',
							iconCls:'icon-italic',
							toggle:true
						},{
							name:'underline',
							iconCls:'icon-underline',
							toggle:true
						},{
							name:'strikethrough',
							iconCls:'icon-strikethrough',
							toggle:true
						},{
							name:'superscript',
							iconCls:'icon-superscript',
							toggle:true
						},{
							name:'subscript',
							iconCls:'icon-subscript',
							toggle:true
						}]
					},{
						type:'toolbar',
						style:{clear:'both'},
						tools:[{
							name:'case-font',
							iconCls:'icon-case-font'
						},{
							name:'grow-font',
							iconCls:'icon-grow-font'
						},{
							name:'shrink-font',
							iconCls:'icon-shrink-font'
						}]
					}]
				},{
					title:'Paragraph',
					dir:'v',
					tools:[{
						type:'toolbar',
						tools:[{
							name:'slign-left',
							iconCls:'icon-align-left',
							toggle:true,
							group:'p1'
						},{
							name:'align-center',
							iconCls:'icon-align-center',
							toggle:true,
							group:'p1'
						},{
							name:'align-right',
							iconCls:'icon-align-right',
							toggle:true,
							group:'p1'
						},{
							name:'align-justify',
							iconCls:'icon-align-justify',
							toggle:true,
							group:'p1'
						}]
					},{
						type:'toolbar',
						style:{marginTop:'2px'},
						tools:[{
							name:'bullets',
							iconCls:'icon-bullets'
						},{
							name:'numbers',
							iconCls:'icon-numbers'
						}]
					}]
				},{
					title:'Editing',
					dir:'v',
					tools:[{
						type:'splitbutton',
						name:'find',
						text:'Find',
						iconCls:'icon-find',
						menuItems:[{
							name:'find',
							text:'Find',
							iconCls:'icon-find'
						},{
							name:'go',
							text:'Go to...',
							iconCls:'icon-go'
						}]
					},{
						name:'replace',
						text:'Replace',
						iconCls:'icon-replace'
					},{
						type:'menubutton',
						name:'select',
						text:'Select',
						iconCls:'icon-select',
						menuItems:[{
							name:'selectall',
							text:'Select All',
							iconCls:'icon-selectall'
						},{
							name:'select-object',
							text:'Select Objects',
							iconCls:'icon-select'
						}]
					}]
				},{
					title:'Print',
					tools:[{
						type:'menubutton',
						name:'print',
						text:'Print',
						iconCls:'icon-print-large',
						iconAlign:'top',
						size:'large'
					}]
				}]
			}]
		}

var insert = {
			selected:0,
			tabs:[{
				title:'Insert',
				groups:[{
					title:'Table',
					tools:[{
						type:'menubutton',
						name:'table',
						text:'Table',
						iconCls:'icon-table-large',
						iconAlign:'top',
						size:'large'
					}]
				},{
					title:'Illustrations',
					tools:[{
						name:'picture',
						text:'Picture',
						iconCls:'icon-picture-large',
						iconAlign:'top',
						size:'large'
					},{
						name:'clipart',
						text:'Clip Art',
						iconCls:'icon-clipart-large',
						iconAlign:'top',
						size:'large'
					},{
						type:'menubutton',
						name:'shapes',
						text:'Shapes',
						iconCls:'icon-shapes-large',
						iconAlign:'top',
						size:'large'
					},{
						name:'smartart',
						text:'SmartArt',
						iconCls:'icon-smartart-large',
						iconAlign:'top',
						size:'large'
					},{
						name:'chart',
						text:'Chart',
						iconCls:'icon-chart-large',
						iconAlign:'top',
						size:'large'
					}]
				},{
					title:'Links',
					tools:[{
						name:'hyperlink',
						text:'Hyperlink',
						iconCls:'icon-hyperlink-large',
						iconAlign:'top',
						size:'large'
					},{
						name:'bookmark',
						text:'Bookmark',
						iconCls:'icon-bookmark-large',
						iconAlign:'top',
						size:'large'
					},{
						name:'crossreference',
						text:'Cross-reference',
						iconCls:'icon-crossreference-large',
						iconAlign:'top',
						size:'large'
					}]
				}]
			}]
		}

var layout = {
			selected:0,
			tabs:[{
				title:'Layout',
				groups:[{
					title:'Page Setup',
					tools:[{
						name:'margins',
						text:'Margins',
						iconCls:'icon-margins-large',
						iconAlign:'top',
						size:'large'
					},{
						name:'size',
						text:'Size',
						iconCls:'icon-size-large',
						iconAlign:'top',
						size:'large'
					},{
						name:'orientation',
						text:'Orientation',
						iconCls:'icon-orientation-large',
						iconAlign:'top',
						size:'large'
					},{
						name:'pagebreak',
						text:'Page Break',
						iconCls:'icon-pagebreak-large',
						iconAlign:'top',
						size:'large'
					}]
				},{
					title:'Page Background',
					tools:[{
						name:'watermark',
						text:'Watermark',
						iconCls:'icon-watermark-large',
						iconAlign:'top',
						size:'large'
					},{
						name:'color',
						text:'Color',
						iconCls:'icon-color-large',
						iconAlign:'top',
						size:'large'
					},{
						name:'borders',
						text:'Borders',
						iconCls:'icon-border-large',
						iconAlign:'top',
						size:'large'
					}]
				},{
					title:'Text Layout',
					tools:[{
						name:'direction',
						text:'Direction',
						iconCls:'icon-direction-large',
						iconAlign:'top',
						size:'large'
					},{
						name:'columns',
						text:'Columns',
						iconCls:'icon-columns-large',
						iconAlign:'top',
						size:'large'
					}]
				}]
			}]
		}

var review = {
			selected:0,
			tabs:[{
				title:'Review',
				groups:[{
					title:'Protection',
					tools:[{
						name:'blockauthors',
						text:'Block Authors',
						iconCls:'icon-blockauthors-large',
						iconAlign:'top',
						size:'large'
					},{
						name:'documentprotection',
						text:'Protection',
						iconCls:'icon-documentprotection-large',
						iconAlign:'top',
						size:'large'
					},{
						name:'permissions',
						text:'Permissions',
						iconCls:'icon-permissions-large',
						iconAlign:'top',
						size:'large'
					}]
				},{
					title: 'Share',
					tools:[{
						name:'message',
						text:'Instant Message',
						iconCls:'icon-message-large',
						iconAlign:'top',
						size:'large'
					},{
						name:'mail',
						text:'Mail',
						iconCls:'icon-mail-large',
						iconAlign:'top',
						size:'large'
					}]
				},{
					title: 'Comments',
					tools:[{
						name:'newcomment',
						text:'New Comment',
						iconCls:'icon-newcomment-large',
						iconAlign:'top',
						size:'large'
					},{
						name:'deletecomment',
						text:'Delete Comment',
						iconCls:'icon-deletecomment-large',
						iconAlign:'top',
						size:'large'
					}]
				},{
					title:'Changes',
					tools:[{
						name:'reviewpane',
						text:'Review Pane',
						iconCls:'icon-reviewpane-large',
						iconAlign:'top',
						size:'large'
					}]
				}]
			}]
		};
		

// Data for ribbon interface
var data = {
			selected:0,
			tabs:[{
				title:'Home',
				groups:[{
					title:'Clipboard',
					tools:[{
						type:'splitbutton',
						name:'paste',
						text:'Paste',
						iconCls:'icon-paste-large',
						iconAlign:'top',
						size:'large',
						menuItems:[{
							name:'paste',
							text:'Paste',
							iconCls:'icon-paste'
						},{
							name:'paste-special',
							text:'Paste Special...',
							iconCls:'icon-paste'
						}]
					},{
						type:'toolbar',
						dir:'v',
						tools:[{
							name:'cut',
							text:'Cut',
							iconCls:'icon-cut'
						},{
							name:'copy',
							text:'Copy',
							iconCls:'icon-copy'
						},{
							name:'format',
							text:'Format',
							iconCls:'icon-format'
						}]
					}]
				},{
					title:'Font',
					tools:[{
						type:'toolbar',
						tools:[{
							type:'combobox',
							valueField:'text',
							textField:'text',
							data:[{text:'Arial',selected:true},{text:'Century'},{text:'Tahoma'}],
							width:116,
							panelHeight:'auto',
							editable:false
						},{
							type:'combobox',
							valueField:'text',
							textField:'text',
							data:[{text:'8'},{text:'12',selected:true},{text:'14'}],
							width:40,
							panelHeight:'auto',
							editable:false
						}]
					},{
						type:'toolbar',
						style:{marginLeft:'5px'},
						tools:[{
							name:'increase-font',
							iconCls:'icon-increase-font'
						},{
							name:'decrease-font',
							iconCls:'icon-decrease-font'
						}]
					},{
						type:'toolbar',
						style:{clear:'both',marginTop:'2px'},
						tools:[{
							name:'bold',
							iconCls:'icon-bold',
							toggle:true
						},{
							name:'italic',
							iconCls:'icon-italic',
							toggle:true
						},{
							name:'underline',
							iconCls:'icon-underline',
							toggle:true
						},{
							name:'strikethrough',
							iconCls:'icon-strikethrough',
							toggle:true
						},{
							name:'superscript',
							iconCls:'icon-superscript',
							toggle:true
						},{
							name:'subscript',
							iconCls:'icon-subscript',
							toggle:true
						}]
					},{
						type:'toolbar',
						style:{clear:'both'},
						tools:[{
							name:'case-font',
							iconCls:'icon-case-font'
						},{
							name:'grow-font',
							iconCls:'icon-grow-font'
						},{
							name:'shrink-font',
							iconCls:'icon-shrink-font'
						}]
					}]
				},{
					title:'Paragraph',
					dir:'v',
					tools:[{
						type:'toolbar',
						tools:[{
							name:'slign-left',
							iconCls:'icon-align-left',
							toggle:true,
							group:'p1'
						},{
							name:'align-center',
							iconCls:'icon-align-center',
							toggle:true,
							group:'p1'
						},{
							name:'align-right',
							iconCls:'icon-align-right',
							toggle:true,
							group:'p1'
						},{
							name:'align-justify',
							iconCls:'icon-align-justify',
							toggle:true,
							group:'p1'
						}]
					},{
						type:'toolbar',
						style:{marginTop:'2px'},
						tools:[{
							name:'bullets',
							iconCls:'icon-bullets'
						},{
							name:'numbers',
							iconCls:'icon-numbers'
						}]
					}]
				},{
					title:'Editing',
					dir:'v',
					tools:[{
						type:'splitbutton',
						name:'find',
						text:'Find',
						iconCls:'icon-find',
						menuItems:[{
							name:'find',
							text:'Find',
							iconCls:'icon-find'
						},{
							name:'go',
							text:'Go to...',
							iconCls:'icon-go'
						}]
					},{
						name:'replace',
						text:'Replace',
						iconCls:'icon-replace'
					},{
						type:'menubutton',
						name:'select',
						text:'Select',
						iconCls:'icon-select',
						menuItems:[{
							name:'selectall',
							text:'Select All',
							iconCls:'icon-selectall'
						},{
							name:'select-object',
							text:'Select Objects',
							iconCls:'icon-select'
						}]
					}]
				},{
					title:'Print',
					tools:[{
						type:'menubutton',
						name:'print',
						text:'Print',
						iconCls:'icon-print-large',
						iconAlign:'top',
						size:'large'
					}]
				}]
			},{
				title:'Insert',
				groups:[{
					title:'Table',
					tools:[{
						type:'menubutton',
						name:'table',
						text:'Table',
						iconCls:'icon-table-large',
						iconAlign:'top',
						size:'large'
					}]
				},{
					title:'Illustrations',
					tools:[{
						name:'picture',
						text:'Picture',
						iconCls:'icon-picture-large',
						iconAlign:'top',
						size:'large'
					},{
						name:'clipart',
						text:'Clip Art',
						iconCls:'icon-clipart-large',
						iconAlign:'top',
						size:'large'
					},{
						type:'menubutton',
						name:'shapes',
						text:'Shapes',
						iconCls:'icon-shapes-large',
						iconAlign:'top',
						size:'large'
					},{
						name:'smartart',
						text:'SmartArt',
						iconCls:'icon-smartart-large',
						iconAlign:'top',
						size:'large'
					},{
						name:'chart',
						text:'Chart',
						iconCls:'icon-chart-large',
						iconAlign:'top',
						size:'large'
					}]
				},{
					title:'Links',
					tools:[{
						name:'hyperlink',
						text:'Hyperlink',
						iconCls:'icon-hyperlink-large',
						iconAlign:'top',
						size:'large'
					},{
						name:'bookmark',
						text:'Bookmark',
						iconCls:'icon-bookmark-large',
						iconAlign:'top',
						size:'large'
					},{
						name:'crossreference',
						text:'Cross-reference',
						iconCls:'icon-crossreference-large',
						iconAlign:'top',
						size:'large'
					}]
				}]
			},{
				title:'Layout',
				groups:[{
					title:'Page Setup',
					tools:[{
						name:'margins',
						text:'Margins',
						iconCls:'icon-margins-large',
						iconAlign:'top',
						size:'large'
					},{
						name:'size',
						text:'Size',
						iconCls:'icon-size-large',
						iconAlign:'top',
						size:'large'
					},{
						name:'orientation',
						text:'Orientation',
						iconCls:'icon-orientation-large',
						iconAlign:'top',
						size:'large'
					},{
						name:'pagebreak',
						text:'Page Break',
						iconCls:'icon-pagebreak-large',
						iconAlign:'top',
						size:'large'
					}]
				},{
					title:'Page Background',
					tools:[{
						name:'watermark',
						text:'Watermark',
						iconCls:'icon-watermark-large',
						iconAlign:'top',
						size:'large'
					},{
						name:'color',
						text:'Color',
						iconCls:'icon-color-large',
						iconAlign:'top',
						size:'large'
					},{
						name:'borders',
						text:'Borders',
						iconCls:'icon-border-large',
						iconAlign:'top',
						size:'large'
					}]
				},{
					title:'Text Layout',
					tools:[{
						name:'direction',
						text:'Direction',
						iconCls:'icon-direction-large',
						iconAlign:'top',
						size:'large'
					},{
						name:'columns',
						text:'Columns',
						iconCls:'icon-columns-large',
						iconAlign:'top',
						size:'large'
					}]
				}]
			},{
				title:'Review',
				groups:[{
					title:'Protection',
					tools:[{
						name:'blockauthors',
						text:'Block Authors',
						iconCls:'icon-blockauthors-large',
						iconAlign:'top',
						size:'large'
					},{
						name:'documentprotection',
						text:'Protection',
						iconCls:'icon-documentprotection-large',
						iconAlign:'top',
						size:'large'
					},{
						name:'permissions',
						text:'Permissions',
						iconCls:'icon-permissions-large',
						iconAlign:'top',
						size:'large'
					}]
				},{
					title: 'Share',
					tools:[{
						name:'message',
						text:'Instant Message',
						iconCls:'icon-message-large',
						iconAlign:'top',
						size:'large'
					},{
						name:'mail',
						text:'Mail',
						iconCls:'icon-mail-large',
						iconAlign:'top',
						size:'large'
					}]
				},{
					title: 'Comments',
					tools:[{
						name:'newcomment',
						text:'New Comment',
						iconCls:'icon-newcomment-large',
						iconAlign:'top',
						size:'large'
					},{
						name:'deletecomment',
						text:'Delete Comment',
						iconCls:'icon-deletecomment-large',
						iconAlign:'top',
						size:'large'
					}]
				},{
					title:'Changes',
					tools:[{
						name:'reviewpane',
						text:'Review Pane',
						iconCls:'icon-reviewpane-large',
						iconAlign:'top',
						size:'large'
					}]
				}]
			}]
		};
// buttons to add to dict: replace, select, font increase size, font decrease size, the A+ and A- icons
var dictqueue = [
	{name: 'paste', text:'Paste', group:'home'},
	{name: 'bold', text:'Bold', group:'home'},
	{name: 'slign-left', text:'Align Left', group:'home'},
	{name: 'align-right', text:'Align Right', group:'home'},
	{name: 'align-center', text:'Align Center', group:'home'},
	{name: 'align-justify', text:'Align Justify', group:'home'},
	{name:'underline', text:'Underline', group:'home'},
	{name:'find', text:'Find', group:'home'},
	{name:'hyperlink', text:'Hyperlink', group:'insert'},
	{name: 'replace', text:'Replace', group:'home'},
	{name:'table', text:'Table', group:'insert'},
	{name:'italic', text:'Italics', group:'home'},
	{name:'bullets', text:'Bullets', group:'home'},
	{name: 'numbers', text:'Numbers', group:'home'},
	{name:'shapes', text:'Shapes', group:'insert'},
	{name:'smartart', text:'SmartArt', group:'insert'},
	{name:'cut', text:'Cut', group:'home'},
	{name:'copy', text:'Copy', group:'home'},
	{name:'format', text:'Format', group:'home'},
	{name:'bold', text:'Bold', group:'home'},
	{name:'strikethrough', text:'Strikethrough', group:'home'},
	{name:'superscript', text:'Superscript', group:'home'},
	{name:'subscript', text:'subscript', group:'home'},
	{name:'picture', text:'Picture', group:'insert'},
	{name:'clipart', text:'ClipArt', group:'insert'},
	{name:'chart', text:'Chart'},
	{name:'pagebreak', text:'Page Break', group:'layout'},
	{name:'bookmark', text:'Bookmark', group:'bookmark'},
	{name:'crossreference', text:'Cross-reference', group:'review'},
	{name:'watermark', text:'Watermark', group:'layout'},
	{name:'color', text:'Color', group:'layout'},
	{name:'borders', text:'Borders', group:'layout'},
	{name:'direction', text:'Text-direction', group:'layout'},
	{name:'columns', text:'Columns', group:'layout'},
	{name:'mail', text:'Mail', group:'review'},
	{name:'message', text:'Instant Message', group:'review'},
	{name:'print', text:'Print', group:'home'},
	{name:'blockauthors', text:'Block Authors', group:'review'},
	{name:'documentprotection', text:'Document Protection', group:'review'},
	{name:'permissions', text:'Permissions', group:'review'},
	{name:'margins', text:'Margins', group:'layout'},
	{name:'size', text:'Size', group:'layout'},
	{name:'orientation', text:'Orientation', group:'layout'},
	{name:'pagebreak', text:'Page Break', group:'layout'},
	{name:'newcomment', text:'New Comment', group:'review'},
	{name:'deletecomment', text:'Delete Comment', group:'review'},
	{name:'reviewpane', text:'Review Pane', group:'review'},
]