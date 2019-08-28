import { Component, Input, OnInit } from '@angular/core';
import { Item } from '../../../core/shared/item.model';
import { ItemViewMode } from '../../../shared/items/item-type-decorator';
import { Observable } from 'rxjs/internal/Observable';
import { RemoteData } from '../../../core/data/remote-data';
import { PaginatedList } from '../../../core/data/paginated-list';
import { RelationshipService } from '../../../core/data/relationship.service';
import { FindAllOptions } from '../../../core/data/request.models';

@Component({
  selector: 'ds-related-items',
  styleUrls: ['./related-items.component.scss'],
  templateUrl: './related-items.component.html'
})
/**
 * This component is used for displaying relations between items
 * It expects a parent item and relationship type, as well as a label to display on top
 */
export class RelatedItemsComponent implements OnInit {
  /**
   * The parent of the list of related items to display
   */
  @Input() parentItem: Item;

  /**
   * The label of the relationship type to display
   * Used in sending a search request to the REST API
   */
  @Input() relationType: string;

  /**
   * Default options to start a search request with
   * Optional input, should you wish a different page size (or other options)
   */
  @Input() options = Object.assign(new FindAllOptions(), { elementsPerPage: 5 });

  /**
   * An i18n label to use as a title for the list (usually describes the relation)
   */
  @Input() label: string;

  /**
   * The list of related items
   */
  items$: Observable<RemoteData<PaginatedList<Item>>>;

  /**
   * Search options for displaying all elements in a list
   */
  allOptions = Object.assign(new FindAllOptions(), { elementsPerPage: 9999 });

  /**
   * The view-mode we're currently on
   * @type {ElementViewMode}
   */
  viewMode = ItemViewMode.Summary;

  /**
   * Whether or not the list is currently expanded to show all related items
   */
  showingAll = false;

  constructor(public relationshipService: RelationshipService) {
  }

  ngOnInit(): void {
    this.items$ = this.relationshipService.getRelatedItemsByLabel(this.parentItem, this.relationType, this.options);
  }

  /**
   * Expand the list to display all related items
   */
  viewMore() {
    this.items$ = this.relationshipService.getRelatedItemsByLabel(this.parentItem, this.relationType, this.allOptions);
    this.showingAll = true;
  }

  /**
   * Collapse the list to display the originally displayed items
   */
  viewLess() {
    this.items$ = this.relationshipService.getRelatedItemsByLabel(this.parentItem, this.relationType, this.options);
    this.showingAll = false;
  }
}
