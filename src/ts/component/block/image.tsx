import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { InputWithFile, Loader, Icon, Error } from 'ts/component';
import { I, C, keyboard, DataUtil, focus } from 'ts/lib';
import { commonStore } from 'ts/store';
import { observer } from 'mobx-react';

interface Props extends I.BlockComponent {};

const $ = require('jquery');
const Constant = require('json/constant.json');

@observer
class BlockImage extends React.Component<Props, {}> {

	_isMounted: boolean = false;
	
	constructor (props: any) {
		super(props);
		
		this.onKeyDown = this.onKeyDown.bind(this);
		this.onKeyUp = this.onKeyUp.bind(this);
		this.onFocus = this.onFocus.bind(this);
		this.onResizeStart = this.onResizeStart.bind(this);
		this.onResize = this.onResize.bind(this);
		this.onResizeEnd = this.onResizeEnd.bind(this);
		this.onChangeUrl = this.onChangeUrl.bind(this);
		this.onChangeFile = this.onChangeFile.bind(this);
		this.onClick = this.onClick.bind(this);
	};

	render () {
		const { block, readOnly } = this.props;
		const { id, fields, content } = block;
		const { width } = fields;
		const { state } = content;
		
		let element = null;
		let css: any = {};
		
		if (width) {
			css.width = (width * 100) + '%';
		};
		
		switch (state) {
			default:
			case I.FileState.Empty:
				element = (
					<InputWithFile block={block} icon="image" textFile="Upload a picture" accept={Constant.extension.image} onChangeUrl={this.onChangeUrl} onChangeFile={this.onChangeFile} readOnly={readOnly} />
				);
				break;
				
			case I.FileState.Uploading:
				element = (
					<Loader />
				);
				break;
				
			case I.FileState.Done:
				element = (
					<div className="wrap resizable" style={css}>
						<img className="media" src={this.getUrl()} onDragStart={(e: any) => { e.preventDefault(); }} onClick={this.onClick} />
						<Icon className="resize" onMouseDown={(e: any) => { this.onResizeStart(e, false); }} />
					</div>
				);
				break;
				
			case I.FileState.Error:
				element = (
					<Error text="Error" />
				);
				break;
		};
		
		return (
			<div className={[ 'focusable', 'c' + id ].join(' ')} tabIndex={0} onKeyDown={this.onKeyDown} onKeyUp={this.onKeyUp} onFocus={this.onFocus}>
				{element}
			</div>
		);
	};
	
	componentDidMount () {
		this._isMounted = true;
		this.bind();
	};
	
	componentWillUnmount () {
		this._isMounted = false;
		this.unbind();
	};
	
	bind () {
		if (!this._isMounted) {
			return;
		};
		
		const node = $(ReactDOM.findDOMNode(this));
		
		node.unbind('resizeStart resize resizeEnd');
		node.on('resizeStart', (e: any, oe: any) => { this.onResizeStart(oe, true); });
		node.on('resize', (e: any, oe: any) => { this.onResize(oe, true); });
		node.on('resizeEnd', (e: any, oe: any) => { this.onResizeEnd(oe, true); });
	};
	
	unbind () {
		if (!this._isMounted) {
			return;
		};
		
		const node = $(ReactDOM.findDOMNode(this));
		node.unbind('resize');
	};
	
	onKeyDown (e: any) {
		this.props.onKeyDown(e, '', [], { from: 0, to: 0 });
	};
	
	onKeyUp (e: any) {
		this.props.onKeyUp(e, '', [], { from: 0, to: 0 });
	};

	onFocus () {
		const { block } = this.props;
		focus.set(block.id, { from: 0, to: 0 });
	};
	
	onChangeUrl (e: any, url: string) {
		const { rootId, block } = this.props;
		const { id } = block;
		
		C.BlockUpload(rootId, id, url, '');
	};
	
	onChangeFile (e: any, path: string) {
		const { rootId, block } = this.props;
		const { id } = block;
		
		C.BlockUpload(rootId, id, '', path);
	};
	
	onResizeStart (e: any, checkMax: boolean) {
		e.preventDefault();
		e.stopPropagation();
		
		if (!this._isMounted) {
			return;
		};
		
		const { dataset, block } = this.props;
		const { selection } = dataset || {};
		const win = $(window);
		const node = $(ReactDOM.findDOMNode(this));
		
		focus.set(block.id, { from: 0, to: 0 });
		win.unbind('mousemove.media mouseup.media');
		
		if (selection) {
			selection.hide();
			selection.preventSelect(true);
		};
		
		node.addClass('isResizing');
		win.on('mousemove.media', (e: any) => { this.onResize(e, checkMax); });
		win.on('mouseup.media', (e: any) => { this.onResizeEnd(e, checkMax); });
	};
	
	onResize (e: any, checkMax: boolean) {
		e.preventDefault();
		e.stopPropagation();
		
		if (!this._isMounted) {
			return;
		};
		
		const node = $(ReactDOM.findDOMNode(this));
		const wrap = node.find('.wrap');
		
		if (!wrap.length) {
			return;
		};
		
		const rect = (wrap.get(0) as Element).getBoundingClientRect() as DOMRect;
		const w = this.getWidth(checkMax, e.pageX - rect.x + 20);
		
		wrap.css({ width: (w * 100) + '%' });
	};
	
	onResizeEnd (e: any, checkMax: boolean) {
		if (!this._isMounted) {
			return;
		};
		
		const { dataset, rootId, block } = this.props;
		const { id } = block;
		const { selection } = dataset || {};
		const node = $(ReactDOM.findDOMNode(this));
		const wrap = node.find('.wrap');
		
		if (!wrap.length) {
			return;
		};
		
		const win = $(window);
		const rect = (wrap.get(0) as Element).getBoundingClientRect() as DOMRect;
		const w = this.getWidth(checkMax, e.pageX - rect.x + 20);
		
		win.unbind('mousemove.media mouseup.media');
		node.removeClass('isResizing');
		
		if (selection) {
			selection.preventSelect(false);
		};
		
		C.BlockListSetFields(rootId, [
			{ blockId: id, fields: { width: w } },
		]);
	};
	
	onClick (e: any) {
		if (e.shiftKey || e.ctrlKey || e.metaKey) {
			return;
		};
		
		commonStore.popupOpen('preview', {
			data: {
				type: I.FileType.Image,
				url: this.getUrl(),
			}
		});
	};
	
	getUrl () {
		const { block } = this.props;
		const { content } = block;
		const { hash } = content;
		
		return commonStore.imageUrl(hash, Constant.size.image);
	};
	
	getWidth (checkMax: boolean, v: number): number {
		const { block } = this.props;
		const { id, fields } = block;
		const el = $('#selectable-' + id);
		
		let width = Number(fields.width) || 1;
		
		if (!el.length) {
			return width;
		};
		
		const ew = el.width();
		const w = Math.min(ew, Math.max(60, checkMax ? width * ew : v));
		
		return Math.min(1, Math.max(0, w / ew));
	};
	
};

export default BlockImage;